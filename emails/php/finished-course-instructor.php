<?php
    $subject = 'Student completed your course';
$preheader = 'A learner finished your course.';
$completion_date = $completion_date ?? 'March 11, 2025';
$course_title = $course_title ?? 'Course Title';
$progress_url = $progress_url ?? 'https://discoverwhoami.com/admin/progress';
$recipient_name = $recipient_name ?? 'there';
$student_name = $student_name ?? 'Alex Morgan';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Course completed</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Good news. A learner finished your course. Consider sending a note or badge.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Course</td>
        <td class="detail-value"><?php echo e($course_title); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Student</td>
        <td class="detail-value"><?php echo e($student_name); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Completed on</td>
        <td class="detail-value"><?php echo e($completion_date); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($progress_url); ?>">View progress</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
