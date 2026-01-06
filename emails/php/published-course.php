<?php
    $subject = 'Your course is live';
$preheader = 'Students can now enroll.';
$course_title = $course_title ?? 'Course Title';
$course_url = $course_url ?? 'https://discoverwhoami.com/courses/course-title';
$published_date = $published_date ?? 'March 12, 2025';
$recipient_name = $recipient_name ?? 'there';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Your course is published</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Your course is now live and available for enrollment.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Course</td>
        <td class="detail-value"><?php echo e($course_title); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Published on</td>
        <td class="detail-value"><?php echo e($published_date); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Course URL</td>
        <td class="detail-value"><?php echo e($course_url); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($course_url); ?>">View course</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
