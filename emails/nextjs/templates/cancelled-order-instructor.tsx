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
  studentEmail?: string;
  studentName?: string;
  items?: { name: string; quantity: number; price: string; total: string }[];
};

export default function CancelledOrderInstructor({
  items = undefined,
  courseTitle = 'Course Title',
  enrollmentUrl = 'https://discoverwhoami.com/instructor/enrollments/DW-1001',
  orderId = 'DW-1001',
  orderTotal = '$199.00',
  recipientName = 'there',
  studentEmail = 'alex@example.com',
  studentName = 'Alex Morgan',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Order cancelled for your course" preheader="A student cancellation was recorded.">
      <h1 style={styles.h1}>Order cancelled</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>A learner cancelled an order for your course. Access may be revoked automatically.</p>
      <DetailsTable
        rows={[
          { label: 'Order ID', value: orderId },
          { label: 'Student', value: studentName },
          { label: 'Student email', value: studentEmail },
          { label: 'Course', value: courseTitle },
          { label: 'Order total', value: orderTotal },
        ]}
      />
      <h2 style={styles.h2}>Order items</h2>
      <OrderItemsTable items={items} />
      <EmailButton href={enrollmentUrl} label="View enrollment" />
    </EmailLayout>
  );
}
