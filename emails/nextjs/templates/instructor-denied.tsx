import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  applicationUrl?: string;
  instructorName?: string;
  nextStep?: string;
  recipientName?: string;
  reviewNotes?: string;
};

export default function InstructorDenied({
  applicationUrl = 'https://discoverwhoami.com/instructor/apply',
  instructorName = 'Jordan Lee',
  nextStep = 'Update your course and resubmit.',
  recipientName = 'there',
  reviewNotes = 'Please add a course description and two lesson previews.',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Instructor application update needed" preheader="We need a few changes before approval.">
      <h1 style={styles.h1}>Action needed on your application</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Thanks for applying. We need a few updates before we can approve your instructor profile.</p>
      <DetailsTable
        rows={[
          { label: 'Instructor', value: instructorName },
          { label: 'Review notes', value: reviewNotes },
          { label: 'Next step', value: nextStep },
        ]}
      />
      <EmailButton href={applicationUrl} label="Update application" />
      <p style={styles.note}>Reply to this email if you have questions about the feedback.</p>
    </EmailLayout>
  );
}
