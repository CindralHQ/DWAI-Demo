<?php
    $subject = 'Instructor application update needed';
$preheader = 'We need a few changes before approval.';
$application_url = $application_url ?? 'https://discoverwhoami.com/instructor/apply';
$instructor_name = $instructor_name ?? 'Jordan Lee';
$next_step = $next_step ?? 'Update your course and resubmit.';
$recipient_name = $recipient_name ?? 'there';
$review_notes = $review_notes ?? 'Please add a course description and two lesson previews.';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Action needed on your application</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Thanks for applying. We need a few updates before we can approve your instructor profile.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Instructor</td>
        <td class="detail-value"><?php echo e($instructor_name); ?></td>
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
        <p><a class="button" href="<?php echo e($application_url); ?>">Update application</a></p>
      <p class="note">Reply to this email if you have questions about the feedback.</p>
<?php include __DIR__ . '/email-footer.php'; ?>
