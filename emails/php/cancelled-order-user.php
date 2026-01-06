<?php
    $subject = 'Your order was cancelled';
$preheader = 'We have stopped processing your order.';
$course_url = $course_url ?? 'https://discoverwhoami.com/courses/course-title';
$order_date = $order_date ?? 'March 10, 2025';
$order_id = $order_id ?? 'DW-1001';
$order_status = $order_status ?? 'Cancelled';
$order_total = $order_total ?? '$199.00';
$recipient_name = $recipient_name ?? 'there';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Order cancelled</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Your order has been cancelled. If you still want this course, you can reorder anytime.</p>
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
    <p><a class="button" href="<?php echo e($course_url); ?>">Browse courses</a></p>
      <p class="note">If you believe this is a mistake, contact support right away.</p>
<?php include __DIR__ . '/email-footer.php'; ?>
