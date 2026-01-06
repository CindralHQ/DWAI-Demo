<?php
$reset_link = $reset_link ?? '';
$site_url = $site_url ?? '';
$user_login = $user_login ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Hi <?php echo e($user_login); ?></p>

<p>Someone has requested a new password for the following account on <?php echo e($site_url); ?></p>

<p>If you didn\'t make this request, just ignore this email. If you\'d like to proceed:</p>

<p><a class="link" href="<?php echo e($reset_link); ?>">Click here to reset your password</a></p>

<?php include __DIR__ . '/email-footer.php'; ?>
