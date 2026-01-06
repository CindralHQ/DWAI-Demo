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
  studentName?: string;
};

export default function EnrolledCourseInstructor({
  courseTitle = 'Course Title',
  enrollmentDate = 'March 8, 2025',
  enrollmentUrl = 'https://discoverwhoami.com/instructor/enrollments/DW-1001',
  recipientName = 'there',
  studentName = 'Alex Morgan',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="New student enrolled" preheader="A learner joined your course.">
      <h1 style={styles.h1}>New student enrolled</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>A learner has enrolled in your course. A warm welcome goes a long way.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Student', value: studentName },
          { label: 'Enrolled on', value: enrollmentDate },
        ]}
      />
      <EmailButton href={enrollmentUrl} label="View student" />
    </EmailLayout>
  );
}
