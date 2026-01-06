import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { OrderItemsTable } from '../components/OrderItemsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  orderDate?: string;
  orderId?: string;
  orderTotal?: string;
  orderUrl?: string;
  paymentMethod?: string;
  recipientName?: string;
  items?: { name: string; quantity: number; price: string; total: string }[];
};

export default function NewOrderGuest({
  items = undefined,
  orderDate = 'March 10, 2025',
  orderId = 'DW-1001',
  orderTotal = '$199.00',
  orderUrl = 'https://discoverwhoami.com/orders/DW-1001',
  paymentMethod = 'Card',
  recipientName = 'there',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="We received your order" preheader="Thanks for your purchase.">
      <h1 style={styles.h1}>Order received</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>Thanks for your order. We are processing payment and will send access details soon.</p>
      <DetailsTable
        rows={[
          { label: 'Order ID', value: orderId },
          { label: 'Order date', value: orderDate },
          { label: 'Order total', value: orderTotal },
          { label: 'Payment method', value: paymentMethod },
        ]}
      />
      <h2 style={styles.h2}>Order items</h2>
      <OrderItemsTable items={items} />
      <EmailButton href={orderUrl} label="View order" />
      <p style={styles.note}>If you want to create an account, use the same email used at checkout.</p>
    </EmailLayout>
  );
}
