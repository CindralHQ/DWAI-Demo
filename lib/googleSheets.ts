export type SheetTestimonial = {
  name: string
  testimonial: string
  photoUrl?: string
}

function hasPermission(value: string | undefined) {
  if (!value) return false
  const normalised = value.trim().toLowerCase()
  return ['yes', 'y', 'true', '1', 'approved', 'permission granted'].includes(normalised)
}

type AirtableRecord = {
  id: string
  fields: Record<string, unknown>
}

type AirtableAttachment = {
  url?: string
}

function asString(value: unknown) {
  if (typeof value === 'string') {
    return value.trim()
  }
  if (Array.isArray(value) && value.length > 0) {
    const candidate = value[0]
    if (typeof candidate === 'string') {
      return candidate.trim()
    }
  }
  if (typeof value === 'number') {
    return String(value)
  }
  if (typeof value === 'boolean') {
    return value ? 'true' : 'false'
  }
  return undefined
}

function extractPhotoUrl(value: unknown) {
  if (!value) return undefined
  if (typeof value === 'string') {
    return value.trim() || undefined
  }
  if (Array.isArray(value)) {
    const attachment = value.find(
      (entry): entry is AirtableAttachment =>
        Boolean(entry) && typeof entry === 'object' && 'url' in (entry as Record<string, unknown>)
    )
    if (!attachment) return undefined
    return typeof attachment.url === 'string' ? attachment.url : undefined
  }
  if (typeof value === 'object' && 'url' in (value as Record<string, unknown>)) {
    const { url } = value as AirtableAttachment
    return typeof url === 'string' ? url : undefined
  }
  return undefined
}

export async function fetchTestimonials(): Promise<SheetTestimonial[]> {
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env.AIRTABLE_TESTIMONIALS_TABLE ?? 'Testimonials'
  const view = process.env.AIRTABLE_TESTIMONIALS_VIEW

  if (!apiKey || !baseId) {
    console.error(
      '[fetchTestimonials] Missing AIRTABLE_API_KEY or AIRTABLE_BASE_ID. Set them in your environment to enable Airtable integration.'
    )
    return []
  }

  const nameField = process.env.AIRTABLE_TESTIMONIALS_NAME_FIELD ?? 'Name'
  const testimonialField = process.env.AIRTABLE_TESTIMONIALS_TESTIMONIAL_FIELD ?? 'Testimonial'
  const permissionField = process.env.AIRTABLE_TESTIMONIALS_PERMISSION_FIELD ?? 'Permission'
  const photoField = process.env.AIRTABLE_TESTIMONIALS_PHOTO_FIELD ?? 'Photo'

  const baseUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`
  const collected: AirtableRecord[] = []
  let offset: string | undefined

  try {
    do {
      const url = new URL(baseUrl)
      url.searchParams.set('pageSize', '100')
      if (view) {
        url.searchParams.set('view', view)
      }
      if (offset) {
        url.searchParams.set('offset', offset)
      }

      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${apiKey}`
        },
        next: { revalidate: 300 }
      })

      if (!response.ok) {
        const errorText = await response.text().catch(() => '')
        console.error(
          '[fetchTestimonials] Airtable request failed',
          response.status,
          response.statusText,
          errorText
        )
        return []
      }

      const payload = (await response.json()) as { records?: AirtableRecord[]; offset?: string }
      if (Array.isArray(payload.records)) {
        collected.push(...payload.records)
      }
      offset = typeof payload.offset === 'string' && payload.offset.length > 0 ? payload.offset : undefined
    } while (offset)
  } catch (error) {
    console.error('[fetchTestimonials] Unexpected error while fetching Airtable data', error)
    return []
  }

  if (collected.length === 0) {
    console.warn('[fetchTestimonials] Airtable returned zero records. Check table/view filters and permission field values.')
  }

  return collected
    .map<SheetTestimonial | null>((record) => {
      const permissionValue = asString(record.fields[permissionField])
      if (!hasPermission(permissionValue)) {
        console.warn('[fetchTestimonials] Skipping record', record.id, 'due to permission value:', permissionValue)
        return null
      }

      const testimonial = asString(record.fields[testimonialField])
      if (!testimonial) {
        console.warn('[fetchTestimonials] Skipping record', record.id, 'because testimonial text is missing.')
        return null
      }

      const name = asString(record.fields[nameField]) ?? 'Anonymous Seeker'
      const photoUrl = extractPhotoUrl(record.fields[photoField])

      return {
        name,
        testimonial,
        photoUrl
      }
    })
    .filter((entry): entry is SheetTestimonial => entry !== null)
}
