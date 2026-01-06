<?php
    $subject = 'You are enrolled';
$preheader = 'Your course access is ready.';
$course_title = $course_title ?? 'Course Title';
$course_url = $course_url ?? 'https://discoverwhoami.com/courses/course-title';
$instructor_name = $instructor_name ?? 'Jordan Lee';
$recipient_name = $recipient_name ?? 'there';
$start_date = $start_date ?? 'March 8, 2025';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>You are enrolled</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Your enrollment is confirmed. Start your first lesson when you are ready.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Course</td>
        <td class="detail-value"><?php echo e($course_title); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Instructor</td>
        <td class="detail-value"><?php echo e($instructor_name); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Start date</td>
        <td class="detail-value"><?php echo e($start_date); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($course_url); ?>">Start course</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
