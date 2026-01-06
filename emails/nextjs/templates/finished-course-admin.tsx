import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  completionDate?: string;
  courseTitle?: string;
  progressUrl?: string;
  recipientName?: string;
  studentName?: string;
};

export default function FinishedCourseAdmin({
  completionDate = 'March 11, 2025',
  courseTitle = 'Course Title',
  progressUrl = 'https://discoverwhoami.com/admin/progress',
  recipientName = 'there',
  studentName = 'Alex Morgan',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Course completed" preheader="A student completed a course.">
      <h1 style={styles.h1}>Course completed</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>A student has completed a course and may be eligible for certification.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Student', value: studentName },
          { label: 'Completed on', value: completionDate },
        ]}
      />
      <EmailButton href={progressUrl} label="View progress" />
    </EmailLayout>
  );
}
