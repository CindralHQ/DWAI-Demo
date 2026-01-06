<?php
    $subject = 'New order for your course';
$preheader = 'A learner purchased your course.';
$course_title = $course_title ?? 'Course Title';
$enrollment_url = $enrollment_url ?? 'https://discoverwhoami.com/instructor/enrollments/DW-1001';
$order_id = $order_id ?? 'DW-1001';
$order_total = $order_total ?? '$199.00';
$recipient_name = $recipient_name ?? 'there';
$student_name = $student_name ?? 'Alex Morgan';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>New order for your course</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>A learner purchased your course. This is a great time to share a welcome message.</p>
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
        <td class="detail-label">Student</td>
        <td class="detail-value"><?php echo e($student_name); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Order total</td>
        <td class="detail-value"><?php echo e($order_total); ?></td>
      </tr>
    </table>
    <h2>Order items</h2>
<?php include __DIR__ . '/order-items-table.php'; ?>
    <p><a class="button" href="<?php echo e($enrollment_url); ?>">View enrollment</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
