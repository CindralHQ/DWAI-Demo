<?php
    $subject = 'New student enrolled';
$preheader = 'A learner joined your course.';
$course_title = $course_title ?? 'Course Title';
$enrollment_date = $enrollment_date ?? 'March 8, 2025';
$enrollment_url = $enrollment_url ?? 'https://discoverwhoami.com/instructor/enrollments/DW-1001';
$recipient_name = $recipient_name ?? 'there';
$student_name = $student_name ?? 'Alex Morgan';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>New student enrolled</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>A learner has enrolled in your course. A warm welcome goes a long way.</p>
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
        <td class="detail-label">Enrolled on</td>
        <td class="detail-value"><?php echo e($enrollment_date); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($enrollment_url); ?>">View student</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
