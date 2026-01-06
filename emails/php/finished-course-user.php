<?php
    $subject = 'You finished the course';
$preheader = 'Your certificate is ready.';
$certificate_id = $certificate_id ?? 'ABC-123';
$certificate_url = $certificate_url ?? 'https://discoverwhoami.com/certificates/ABC123';
$completion_date = $completion_date ?? 'March 11, 2025';
$course_title = $course_title ?? 'Course Title';
$recipient_name = $recipient_name ?? 'there';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Congratulations on finishing</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>You completed the course. You can download your certificate or review lessons anytime.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Course</td>
        <td class="detail-value"><?php echo e($course_title); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Completed on</td>
        <td class="detail-value"><?php echo e($completion_date); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Certificate ID</td>
        <td class="detail-value"><?php echo e($certificate_id); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($certificate_url); ?>">View certificate</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
