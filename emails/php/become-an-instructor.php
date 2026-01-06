<?php
$subject = 'Become an instructor at Discover Who Am I';
$preheader = 'Finish your instructor profile to get approved.';
$application_status = $application_status ?? 'Profile started';
$application_url = $application_url ?? 'https://discoverwhoami.com/instructor/apply';
$next_step = $next_step ?? 'Update your course and resubmit.';
$recipient_name = $recipient_name ?? 'there';
$request_date = $request_date ?? 'March 7, 2025';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Become an instructor</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Thanks for your interest in teaching with us. Complete your profile and submit your first course outline to start review.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Application status</td>
        <td class="detail-value"><?php echo e($application_status); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Requested on</td>
        <td class="detail-value"><?php echo e($request_date); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Next step</td>
        <td class="detail-value"><?php echo e($next_step); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($application_url); ?>">Finish application</a></p>
      <p class="note">Reviews typically take 2 to 3 business days after submission.</p>
<?php include __DIR__ . '/email-footer.php'; ?>
