<?php
    $subject = 'Order cancelled';
$preheader = 'A customer cancelled an order.';
$customer_email = $customer_email ?? 'alex@example.com';
$customer_name = $customer_name ?? 'Alex Morgan';
$order_id = $order_id ?? 'DW-1001';
$order_total = $order_total ?? '$199.00';
$order_url = $order_url ?? 'https://discoverwhoami.com/orders/DW-1001';
$payment_method = $payment_method ?? 'Card';
$recipient_name = $recipient_name ?? 'there';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Order cancelled</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>A customer cancelled an order. Review for refunds or access changes.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Order ID</td>
        <td class="detail-value"><?php echo e($order_id); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Customer</td>
        <td class="detail-value"><?php echo e($customer_name); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Customer email</td>
        <td class="detail-value"><?php echo e($customer_email); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Order total</td>
        <td class="detail-value"><?php echo e($order_total); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Payment method</td>
        <td class="detail-value"><?php echo e($payment_method); ?></td>
      </tr>
    </table>
    <h2>Order items</h2>
<?php include __DIR__ . '/order-items-table.php'; ?>
    <p><a class="button" href="<?php echo e($order_url); ?>">View order</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
