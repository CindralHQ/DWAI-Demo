import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  courseTitle?: string;
  enrollmentDate?: string;
  enrollmentUrl?: string;
  recipientName?: string;
  studentEmail?: string;
  studentName?: string;
};

export default function EnrolledCourseAdmin({
  courseTitle = 'Course Title',
  enrollmentDate = 'March 8, 2025',
  enrollmentUrl = 'https://discoverwhoami.com/instructor/enrollments/DW-1001',
  recipientName = 'there',
  studentEmail = 'alex@example.com',
  studentName = 'Alex Morgan',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="New course enrollment" preheader="A student enrolled in a course.">
      <h1 style={styles.h1}>New enrollment</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>A student just enrolled. You can review the enrollment details below.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Student', value: studentName },
          { label: 'Student email', value: studentEmail },
          { label: 'Enrolled on', value: enrollmentDate },
        ]}
      />
      <EmailButton href={enrollmentUrl} label="View enrollment" />
    </EmailLayout>
  );
}
