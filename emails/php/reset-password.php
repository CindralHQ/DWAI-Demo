<?php
    $subject = 'Reset your password';
$preheader = 'Use this link to reset your password.';
$recipient_name = $recipient_name ?? 'there';
$reset_expiry = $reset_expiry ?? '30 minutes';
$reset_url = $reset_url ?? 'https://discoverwhoami.com/reset-password?token=sample';
$support_url = $support_url ?? 'https://discoverwhoami.com/support';
    ?>
    <?php include __DIR__ . '/email-header.php'; ?>
    <h1>Reset your password</h1>
    <p>Hi <?php echo e($recipient_name); ?>,</p>
    <p>We received a request to reset your password. If you did not request this, you can ignore this email.</p>
    <table role="presentation" class="details">
          <tr>
        <td class="detail-label">Reset link expires in</td>
        <td class="detail-value"><?php echo e($reset_expiry); ?></td>
      </tr>
      <tr>
        <td class="detail-label">Support</td>
        <td class="detail-value"><?php echo e($support_url); ?></td>
      </tr>
    </table>
        <p><a class="button" href="<?php echo e($reset_url); ?>">Reset password</a></p>
      <p class="note">For security, do not share this link with anyone.</p>
<?php include __DIR__ . '/email-footer.php'; ?>
