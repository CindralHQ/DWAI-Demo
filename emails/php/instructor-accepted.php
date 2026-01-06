<?php
    $subject = 'Instructor application approved';
$preheader = 'Welcome to the instructor team.';
$approved_date = $approved_date ?? 'March 7, 2025';
$dashboard_url = $dashboard_url ?? 'https://discoverwhoami.com/dashboard';
$instructor_name = $instructor_name ?? 'Jordan Lee';
$payout_method = $payout_method ?? 'Bank transfer';
$recipient_name = $recipient_name ?? 'there';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>You are approved</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>Your instructor profile is approved. You can now publish courses and manage enrollments.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Instructor</td>
        <td class="detail-value"><?php echo e($instructor_name); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Approved on</td>
        <td class="detail-value"><?php echo e($approved_date); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Payout method</td>
        <td class="detail-value"><?php echo e($payout_method); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($dashboard_url); ?>">Go to instructor dashboard</a></p>
    <?php include __DIR__ . '/email-footer.php'; ?>
