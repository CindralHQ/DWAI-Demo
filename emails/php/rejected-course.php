<?php
    $subject = 'Course needs updates';
$preheader = 'Please review feedback and resubmit.';
$course_edit_url = $course_edit_url ?? 'https://discoverwhoami.com/instructor/courses/course-title/edit';
$course_title = $course_title ?? 'Course Title';
$next_step = $next_step ?? 'Update your course and resubmit.';
$recipient_name = $recipient_name ?? 'there';
$review_notes = $review_notes ?? 'Please add a course description and two lesson previews.';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Course needs updates</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Thanks for submitting your course. We need a few updates before we can publish it.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Course</td>
        <td class="detail-value"><?php echo e($course_title); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Review notes</td>
        <td class="detail-value"><?php echo e($review_notes); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Next step</td>
        <td class="detail-value"><?php echo e($next_step); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($course_edit_url); ?>">Edit course</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
