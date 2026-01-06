<?php
    $subject = 'Course submitted for review';
$preheader = 'We received your course submission.';
$course_title = $course_title ?? 'Course Title';
$course_url = $course_url ?? 'https://discoverwhoami.com/courses/course-title';
$recipient_name = $recipient_name ?? 'there';
$review_status = $review_status ?? 'In review';
$submitted_date = $submitted_date ?? 'March 9, 2025';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Course submitted</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Thanks for submitting your course. Our team will review it and get back to you.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Course</td>
        <td class="detail-value"><?php echo e($course_title); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Submitted on</td>
        <td class="detail-value"><?php echo e($submitted_date); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Review status</td>
        <td class="detail-value"><?php echo e($review_status); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($course_url); ?>">View course</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
