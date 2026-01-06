<?php
    $subject = 'Your order was cancelled';
$preheader = 'No charges will be made.';
$order_date = $order_date ?? 'March 10, 2025';
$order_id = $order_id ?? 'DW-1001';
$order_status = $order_status ?? 'Cancelled';
$order_total = $order_total ?? '$199.00';
$recipient_name = $recipient_name ?? 'there';
$support_url = $support_url ?? 'https://discoverwhoami.com/support';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Your order was cancelled</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>This order has been cancelled and any pending authorization will be released.</p>
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
        <td class="detail-label">Order status</td>
        <td class="detail-value"><?php echo e($order_status); ?></td>
      </tr>
    </table>
    <h2>Order items</h2>
<?php include __DIR__ . '/order-items-table.php'; ?>
    <p><a class="button" href="<?php echo e($support_url); ?>">Contact support</a></p>
      <p class="note">If you still want the course, you can place a new order anytime.</p>
<?php include __DIR__ . '/email-footer.php'; ?>
