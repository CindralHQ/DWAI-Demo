<?php
    $subject = 'Order complete';
$preheader = 'Payment confirmed and access is ready.';
$course_title = $course_title ?? 'Course Title';
$course_url = $course_url ?? 'https://discoverwhoami.com/courses/course-title';
$order_id = $order_id ?? 'DW-1001';
$order_total = $order_total ?? '$199.00';
$recipient_name = $recipient_name ?? 'there';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Order complete</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Payment is confirmed and your access is ready.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Order ID</td>
        <td class="detail-value"><?php echo e($order_id); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Course</td>
        <td class="detail-value"><?php echo e($course_title); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Order total</td>
        <td class="detail-value"><?php echo e($order_total); ?></td>
      </tr>
    </table>
    <h2>Order items</h2>
<?php include __DIR__ . '/order-items-table.php'; ?>
    <p><a class="button" href="<?php echo e($course_url); ?>">Start course</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
