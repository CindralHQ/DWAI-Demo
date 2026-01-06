<?php
    $subject = 'Order status updated';
$preheader = 'Your order status has changed.';
$order_date = $order_date ?? 'March 10, 2025';
$order_id = $order_id ?? 'DW-1001';
$order_status = $order_status ?? 'Updated';
$order_total = $order_total ?? '$199.00';
$order_url = $order_url ?? 'https://discoverwhoami.com/orders/DW-1001';
$recipient_name = $recipient_name ?? 'there';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Order status updated</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Your order status changed. See the latest details below.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Order ID</td>
        <td class="detail-value"><?php echo e($order_id); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Order status</td>
        <td class="detail-value"><?php echo e($order_status); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Order total</td>
        <td class="detail-value"><?php echo e($order_total); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Order date</td>
        <td class="detail-value"><?php echo e($order_date); ?></td>
      </tr>
    </table>
    <h2>Order items</h2>
<?php include __DIR__ . '/order-items-table.php'; ?>
    <p><a class="button" href="<?php echo e($order_url); ?>">View order</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
