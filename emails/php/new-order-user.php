<?php
    $subject = 'We received your order';
$preheader = 'Thanks for your purchase.';
$order_date = $order_date ?? 'March 10, 2025';
$order_id = $order_id ?? 'DW-1001';
$order_total = $order_total ?? '$199.00';
$order_url = $order_url ?? 'https://discoverwhoami.com/orders/DW-1001';
$payment_method = $payment_method ?? 'Card';
$recipient_name = $recipient_name ?? 'there';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Order received</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Thanks for your order. We will email you as soon as payment is confirmed.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Order ID</td>
        <td class="detail-value"><?php echo e($order_id); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Order date</td>
        <td class="detail-value"><?php echo e($order_date); ?></td>
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
