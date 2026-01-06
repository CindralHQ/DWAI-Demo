import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  applicationStatus?: string;
  applicationUrl?: string;
  nextStep?: string;
  recipientName?: string;
  requestDate?: string;
};

export default function BecomeAnInstructor({
  applicationStatus = 'Profile started',
  applicationUrl = 'https://discoverwhoami.com/instructor/apply',
  nextStep = 'Update your course and resubmit.',
  recipientName = 'there',
  requestDate = 'March 7, 2025',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Become an instructor at Discover Who Am I" preheader="Finish your instructor profile to get approved.">
      <h1 style={styles.h1}>Become an instructor</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Thanks for your interest in teaching with us. Complete your profile and submit your first course outline to start review.</p>
      <DetailsTable
        rows={[
          { label: 'Application status', value: applicationStatus },
          { label: 'Requested on', value: requestDate },
          { label: 'Next step', value: nextStep },
        ]}
      />
      <EmailButton href={applicationUrl} label="Finish application" />
      <p style={styles.note}>Reviews typically take 2 to 3 business days after submission.</p>
    </EmailLayout>
  );
}
