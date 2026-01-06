<?php
    $subject = 'Course completed';
$preheader = 'Completion recorded.';
$completion_date = $completion_date ?? 'March 11, 2025';
$course_title = $course_title ?? 'Course Title';
$course_url = $course_url ?? 'https://discoverwhoami.com/courses/course-title';
$recipient_name = $recipient_name ?? 'there';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Course completed</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Your completion has been recorded.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Course</td>
        <td class="detail-value"><?php echo e($course_title); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Completed on</td>
        <td class="detail-value"><?php echo e($completion_date); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($course_url); ?>">View course</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
