import { LegalPage } from '@/components/legal/LegalPage'

export const metadata = { title: 'Terms & Conditions - Discover Who Am I' }

export default function TermsPage() {
  return (
    <LegalPage
      theme="manipura"
      title="Terms & Conditions"
      intro="Outline the agreement between Discover Who Am I and participants engaging with the digital platform, events, and courses."
      sections={[
        {
          heading: 'Participation Guidelines',
          body: [
            'Clarify expectations for respectful conduct in live gatherings, forums, and course spaces.',
            'Mention any prerequisites or prerequisites for advanced transmissions.'
          ]
        },
        {
          heading: 'Digital Access',
          body: [
            'Describe delivery of digital content, availability windows, and restrictions on sharing login credentials.'
          ]
        },
        {
          heading: 'Intellectual Property',
          body: [
            'Emphasise that all materials, audio, video, and art remain the property of Discover Who Am I and cannot be reproduced without permission.'
          ]
        }
      ]}
    />
  )
}
