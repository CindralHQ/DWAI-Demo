import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { OrderItemsTable } from '../components/OrderItemsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  courseTitle?: string;
  enrollmentUrl?: string;
  orderId?: string;
  orderTotal?: string;
  recipientName?: string;
  studentName?: string;
  items?: { name: string; quantity: number; price: string; total: string }[];
};

export default function NewOrderInstructor({
  items = undefined,
  courseTitle = 'Course Title',
  enrollmentUrl = 'https://discoverwhoami.com/instructor/enrollments/DW-1001',
  orderId = 'DW-1001',
  orderTotal = '$199.00',
  recipientName = 'there',
  studentName = 'Alex Morgan',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="New order for your course" preheader="A learner purchased your course.">
      <h1 style={styles.h1}>New order for your course</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>A learner purchased your course. This is a great time to share a welcome message.</p>
      <DetailsTable
        rows={[
          { label: 'Order ID', value: orderId },
          { label: 'Course', value: courseTitle },
          { label: 'Student', value: studentName },
          { label: 'Order total', value: orderTotal },
        ]}
      />
      <h2 style={styles.h2}>Order items</h2>
      <OrderItemsTable items={items} />
      <EmailButton href={enrollmentUrl} label="View enrollment" />
    </EmailLayout>
  );
}
