import { LegalPage } from '@/components/legal/LegalPage'

export const metadata = { title: 'Privacy Policy - Discover Who Am I' }

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      theme="lotus"
      title="Privacy Policy"
      intro="Placeholder copy summarising how visitor data is handled across the Discover Who Am I digital experiences."
      sections={[
        {
          heading: 'Information Collection',
          body: [
            'Outline the types of data gathered through course registrations, newsletters, or event forms.',
            'Clarify how consent is requested and how visitors can update their information.'
          ]
        },
        {
          heading: 'Usage of Data',
          body: [
            'Describe how insights support community communication, product improvements, and personalised updates.',
            'Reassure visitors that data is never sold or shared outside approved service providers.'
          ]
        },
        {
          heading: 'Data Retention & Rights',
          body: [
            'Explain retention timelines and the process for requesting deletion or export of personal data.'
          ]
        }
      ]}
    />
  )
}
