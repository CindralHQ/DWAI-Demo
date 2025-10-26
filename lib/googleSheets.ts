type SheetRow = [string?, string?, string?, string?]

export type SheetTestimonial = {
  name: string
  testimonial: string
  photoUrl?: string
}

function hasPermission(value: string | undefined) {
  if (!value) return false
  const normalised = value.trim().toLowerCase()
  return ['yes', 'y', 'true', 'approved', 'permission granted'].includes(normalised)
}

export async function fetchTestimonialsFromSheet(): Promise<SheetTestimonial[]> {
  const sheetId = process.env.GOOGLE_SHEETS_TESTIMONIALS_ID
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY

  if (!sheetId || !apiKey) {
    console.warn(
      '[fetchTestimonialsFromSheet] Missing GOOGLE_SHEETS_TESTIMONIALS_ID or GOOGLE_SHEETS_API_KEY environment variables.'
    )
    return []
  }

  const range =
    process.env.GOOGLE_SHEETS_TESTIMONIALS_RANGE && process.env.GOOGLE_SHEETS_TESTIMONIALS_RANGE.length > 0
      ? process.env.GOOGLE_SHEETS_TESTIMONIALS_RANGE
      : 'Sheet1!B2:E'

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?key=${apiKey}`

  try {
    const response = await fetch(url, {
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      console.error('[fetchTestimonialsFromSheet] Failed with status', response.status)
      return []
    }

    const payload = (await response.json()) as { values?: SheetRow[] }
    const rows = payload.values ?? []

    return rows
      .map<SheetTestimonial | null>((row) => {
        const [name, photoUrl, testimonial, permission] = row
        if (!hasPermission(permission)) {
          return null
        }
        const trimmedTestimonial = testimonial?.trim()
        if (!trimmedTestimonial) {
          return null
        }

        return {
          name: name?.trim() || 'Anonymous Seeker',
          photoUrl: photoUrl?.trim() || undefined,
          testimonial: trimmedTestimonial
        }
      })
      .filter((entry): entry is SheetTestimonial => entry !== null)
  } catch (error) {
    console.error('[fetchTestimonialsFromSheet] Unexpected error while fetching data', error)
    return []
  }
}
