import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  approvedDate?: string;
  dashboardUrl?: string;
  instructorName?: string;
  payoutMethod?: string;
  recipientName?: string;
};

export default function InstructorAccepted({
  approvedDate = 'March 7, 2025',
  dashboardUrl = 'https://discoverwhoami.com/dashboard',
  instructorName = 'Jordan Lee',
  payoutMethod = 'Bank transfer',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Instructor application approved" preheader="Welcome to the instructor team.">
      <h1 style={styles.h1}>You are approved</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Your instructor profile is approved. You can now publish courses and manage enrollments.</p>
      <DetailsTable
        rows={[
          { label: 'Instructor', value: instructorName },
          { label: 'Approved on', value: approvedDate },
          { label: 'Payout method', value: payoutMethod },
        ]}
      />
      <EmailButton href={dashboardUrl} label="Go to instructor dashboard" />
    </EmailLayout>
  );
}
