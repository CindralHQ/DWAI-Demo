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
  orderUrl?: string;
  recipientName?: string;
  items?: { name: string; quantity: number; price: string; total: string }[];
};

export default function ProcessingOrderGuest({
  items = undefined,
  orderDate = 'March 10, 2025',
  orderId = 'DW-1001',
  orderStatus = 'Processing',
  orderTotal = '$199.00',
  orderUrl = 'https://discoverwhoami.com/orders/DW-1001',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Your order is processing" preheader="Payment verification is in progress.">
      <h1 style={styles.h1}>Order processing</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>We are confirming your payment. You will get another email when it is complete.</p>
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
      <EmailButton href={orderUrl} label="Check order" />
    </EmailLayout>
  );
}
