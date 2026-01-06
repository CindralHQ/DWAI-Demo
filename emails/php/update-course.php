<?php
    $subject = 'Course update received';
$preheader = 'Your course updates were saved.';
$course_title = $course_title ?? 'Course Title';
$course_url = $course_url ?? 'https://discoverwhoami.com/courses/course-title';
$recipient_name = $recipient_name ?? 'there';
$review_status = $review_status ?? 'In review';
$update_date = $update_date ?? 'March 9, 2025';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Course updated</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Your course updates are saved and pending review if required.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Course</td>
        <td class="detail-value"><?php echo e($course_title); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Updated on</td>
        <td class="detail-value"><?php echo e($update_date); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Review status</td>
        <td class="detail-value"><?php echo e($review_status); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($course_url); ?>">View course</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
