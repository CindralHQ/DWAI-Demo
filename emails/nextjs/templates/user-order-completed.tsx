import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { OrderItemsTable } from '../components/OrderItemsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  courseTitle?: string;
  courseUrl?: string;
  orderId?: string;
  orderTotal?: string;
  recipientName?: string;
  items?: { name: string; quantity: number; price: string; total: string }[];
};

export default function UserOrderCompleted({
  items = undefined,
  courseTitle = 'Course Title',
  courseUrl = 'https://discoverwhoami.com/courses/course-title',
  orderId = 'DW-1001',
  orderTotal = '$199.00',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Order complete" preheader="Payment confirmed and access is ready.">
      <h1 style={styles.h1}>Order complete</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Payment is confirmed and your access is ready.</p>
      <DetailsTable
        rows={[
          { label: 'Order ID', value: orderId },
          { label: 'Course', value: courseTitle },
          { label: 'Order total', value: orderTotal },
        ]}
      />
      <h2 style={styles.h2}>Order items</h2>
      <OrderItemsTable items={items} />
      <EmailButton href={courseUrl} label="Start course" />
    </EmailLayout>
  );
}
