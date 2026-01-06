import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { OrderItemsTable } from '../components/OrderItemsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  courseTitle?: string;
  courseUrl?: string;
  orderDate?: string;
  orderId?: string;
  orderTotal?: string;
  recipientName?: string;
  items?: { name: string; quantity: number; price: string; total: string }[];
};

export default function CompletedOrderUser({
  items = undefined,
  courseTitle = 'Course Title',
  courseUrl = 'https://discoverwhoami.com/courses/course-title',
  orderDate = 'March 10, 2025',
  orderId = 'DW-1001',
  orderTotal = '$199.00',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Your order is complete" preheader="Access is ready for your course.">
      <h1 style={styles.h1}>Order complete</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Thanks for learning with us. Your course access is now active.</p>
      <DetailsTable
        rows={[
          { label: 'Order ID', value: orderId },
          { label: 'Order date', value: orderDate },
          { label: 'Order total', value: orderTotal },
          { label: 'Course', value: courseTitle },
        ]}
      />
      <h2 style={styles.h2}>Order items</h2>
      <OrderItemsTable items={items} />
      <EmailButton href={courseUrl} label="Go to course" />
    </EmailLayout>
  );
}
