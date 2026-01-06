import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { OrderItemsTable } from '../components/OrderItemsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  customerEmail?: string;
  customerName?: string;
  orderId?: string;
  orderTotal?: string;
  orderUrl?: string;
  paymentMethod?: string;
  recipientName?: string;
  items?: { name: string; quantity: number; price: string; total: string }[];
};

export default function CompletedOrderAdmin({
  items = undefined,
  customerEmail = 'alex@example.com',
  customerName = 'Alex Morgan',
  orderId = 'DW-1001',
  orderTotal = '$199.00',
  orderUrl = 'https://discoverwhoami.com/orders/DW-1001',
  paymentMethod = 'Card',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Order completed" preheader="Payment confirmed and order completed.">
      <h1 style={styles.h1}>Order completed</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Payment has been captured and access is active.</p>
      <DetailsTable
        rows={[
          { label: 'Order ID', value: orderId },
          { label: 'Customer', value: customerName },
          { label: 'Customer email', value: customerEmail },
          { label: 'Order total', value: orderTotal },
          { label: 'Payment method', value: paymentMethod },
        ]}
      />
      <h2 style={styles.h2}>Order items</h2>
      <OrderItemsTable items={items} />
      <EmailButton href={orderUrl} label="View order" />
    </EmailLayout>
  );
}
