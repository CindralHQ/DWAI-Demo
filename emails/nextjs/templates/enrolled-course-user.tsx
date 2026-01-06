import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  courseTitle?: string;
  courseUrl?: string;
  instructorName?: string;
  recipientName?: string;
  startDate?: string;
};

export default function EnrolledCourseUser({
  courseTitle = 'Course Title',
  courseUrl = 'https://discoverwhoami.com/courses/course-title',
  instructorName = 'Jordan Lee',
  recipientName = 'there',
  startDate = 'March 8, 2025',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="You are enrolled" preheader="Your course access is ready.">
      <h1 style={styles.h1}>You are enrolled</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Your enrollment is confirmed. Start your first lesson when you are ready.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Instructor', value: instructorName },
          { label: 'Start date', value: startDate },
        ]}
      />
      <EmailButton href={courseUrl} label="Start course" />
    </EmailLayout>
  );
}
