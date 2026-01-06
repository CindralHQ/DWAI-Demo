import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  certificateId?: string;
  certificateUrl?: string;
  completionDate?: string;
  courseTitle?: string;
  recipientName?: string;
};

export default function FinishedCourseUser({
  certificateId = 'ABC-123',
  certificateUrl = 'https://discoverwhoami.com/certificates/ABC123',
  completionDate = 'March 11, 2025',
  courseTitle = 'Course Title',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="You finished the course" preheader="Your certificate is ready.">
      <h1 style={styles.h1}>Congratulations on finishing</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>You completed the course. You can download your certificate or review lessons anytime.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Completed on', value: completionDate },
          { label: 'Certificate ID', value: certificateId },
        ]}
      />
      <EmailButton href={certificateUrl} label="View certificate" />
    </EmailLayout>
  );
}
