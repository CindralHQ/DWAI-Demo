import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  courseTitle?: string;
  courseUrl?: string;
  enrollmentDate?: string;
  orderId?: string;
  recipientName?: string;
};

export default function EnrolledCourse({
  courseTitle = 'Course Title',
  courseUrl = 'https://discoverwhoami.com/courses/course-title',
  enrollmentDate = 'March 8, 2025',
  orderId = 'DW-1001',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Enrollment confirmed" preheader="Your seat is reserved.">
      <h1 style={styles.h1}>Enrollment confirmed</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>You are all set. Keep this email for your records.</p>
      <DetailsTable
        rows={[
          { label: 'Course', value: courseTitle },
          { label: 'Enrolled on', value: enrollmentDate },
          { label: 'Order ID', value: orderId },
        ]}
      />
      <EmailButton href={courseUrl} label="View course" />
    </EmailLayout>
  );
}
