import { LegalPage } from '@/components/legal/LegalPage'

export const metadata = { title: 'Disclaimer - Discover Who Am I' }

export default function DisclaimerPage() {
  return (
    <LegalPage
      theme="twilight"
      title="Disclaimer"
      intro="This placeholder disclaimer outlines how the teachings are shared and the scope of personal responsibility. Replace with approved legal wording."
      sections={[
        {
          heading: 'Personal Practice',
          body: [
            'The content presented through the Who Am I series is offered for personal reflection and spiritual exploration.',
            'Always consult qualified professionals for medical, psychological, or financial guidance related to your journey.'
          ]
        },
        {
          heading: 'No Guarantees',
          body: [
            'Spiritual experiences vary for each practitioner. The series conveys lived insights rather than promises of specific outcomes.'
          ]
        },
        {
          heading: 'Use of Materials',
          body: [
            'All materials are shared for individual study. Do not reproduce, distribute, or adapt the content without express permission.'
          ]
        }
      ]}
    />
  )
}
