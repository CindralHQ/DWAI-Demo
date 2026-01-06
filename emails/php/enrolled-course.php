<?php
    $subject = 'Enrollment confirmed';
$preheader = 'Your seat is reserved.';
$course_title = $course_title ?? 'Course Title';
$course_url = $course_url ?? 'https://discoverwhoami.com/courses/course-title';
$enrollment_date = $enrollment_date ?? 'March 8, 2025';
$order_id = $order_id ?? 'DW-1001';
$recipient_name = $recipient_name ?? 'there';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Enrollment confirmed</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>You are all set. Keep this email for your records.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Course</td>
        <td class="detail-value"><?php echo e($course_title); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Enrolled on</td>
        <td class="detail-value"><?php echo e($enrollment_date); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Order ID</td>
        <td class="detail-value"><?php echo e($order_id); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($course_url); ?>">View course</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
