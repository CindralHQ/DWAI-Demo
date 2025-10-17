import { LegalPage } from '@/components/legal/LegalPage'

export const metadata = { title: 'Payment & Refund Policy - Discover Who Am I' }

export default function RefundPolicyPage() {
  return (
    <LegalPage
      theme="lotus"
      title="Payment & Refund Policy"
      intro="Communicate transparent purchasing, cancellation, and refund practices for courses and events."
      sections={[
        {
          heading: 'Purchases',
          body: [
            'Explain accepted payment methods and how confirmations are delivered.',
            'Note any taxes, currency conversions, or service fees that may apply.'
          ]
        },
        {
          heading: 'Refund Window',
          body: [
            'Share the conditions under which refunds are granted and the timelines for processing.',
            'Clarify non-refundable items, such as digital downloads that are accessible immediately.'
          ]
        },
        {
          heading: 'Contact',
          body: [
            'Provide an email or support channel for refund requests, billing questions, and invoice needs.'
          ]
        }
      ]}
    />
  )
}
