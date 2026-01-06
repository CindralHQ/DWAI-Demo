<?php
    $subject = 'New course enrollment';
$preheader = 'A student enrolled in a course.';
$course_title = $course_title ?? 'Course Title';
$enrollment_date = $enrollment_date ?? 'March 8, 2025';
$enrollment_url = $enrollment_url ?? 'https://discoverwhoami.com/instructor/enrollments/DW-1001';
$recipient_name = $recipient_name ?? 'there';
$student_email = $student_email ?? 'alex@example.com';
$student_name = $student_name ?? 'Alex Morgan';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>New enrollment</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>A student just enrolled. You can review the enrollment details below.</p>
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
        <td class="detail-label">Student email</td>
        <td class="detail-value"><?php echo e($student_email); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Enrolled on</td>
        <td class="detail-value"><?php echo e($enrollment_date); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($enrollment_url); ?>">View enrollment</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
