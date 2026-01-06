import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { OrderItemsTable } from '../components/OrderItemsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  courseUrl?: string;
  orderDate?: string;
  orderId?: string;
  orderStatus?: string;
  orderTotal?: string;
  recipientName?: string;
  items?: { name: string; quantity: number; price: string; total: string }[];
};

export default function CancelledOrderUser({
  items = undefined,
  courseUrl = 'https://discoverwhoami.com/courses/course-title',
  orderDate = 'March 10, 2025',
  orderId = 'DW-1001',
  orderStatus = 'Cancelled',
  orderTotal = '$199.00',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Your order was cancelled" preheader="We have stopped processing your order.">
      <h1 style={styles.h1}>Order cancelled</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Your order has been cancelled. If you still want this course, you can reorder anytime.</p>
      <DetailsTable
        rows={[
          { label: 'Order ID', value: orderId },
          { label: 'Order date', value: orderDate },
          { label: 'Order total', value: orderTotal },
          { label: 'Order status', value: orderStatus },
        ]}
      />
      <h2 style={styles.h2}>Order items</h2>
      <OrderItemsTable items={items} />
      <EmailButton href={courseUrl} label="Browse courses" />
      <p style={styles.note}>If you believe this is a mistake, contact support right away.</p>
    </EmailLayout>
  );
}
