import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { OrderItemsTable } from '../components/OrderItemsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  orderDate?: string;
  orderId?: string;
  orderStatus?: string;
  orderTotal?: string;
  recipientName?: string;
  supportUrl?: string;
  items?: { name: string; quantity: number; price: string; total: string }[];
};

export default function CancelledOrderGuest({
  items = undefined,
  orderDate = 'March 10, 2025',
  orderId = 'DW-1001',
  orderStatus = 'Cancelled',
  orderTotal = '$199.00',
  recipientName = 'there',
  supportUrl = 'https://discoverwhoami.com/support',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Your order was cancelled" preheader="No charges will be made.">
      <h1 style={styles.h1}>Your order was cancelled</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>This order has been cancelled and any pending authorization will be released.</p>
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
      <EmailButton href={supportUrl} label="Contact support" />
      <p style={styles.note}>If you still want the course, you can place a new order anytime.</p>
    </EmailLayout>
  );
}
