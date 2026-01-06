<?php
$login_url = $login_url ?? '';
$site_title = $site_title ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Congrats! You become an Instructor at <strong><?php echo e($site_title); ?></strong></p>

<p>Please <a href="<?php echo e($login_url); ?>">login</a> to <strong><?php echo e($site_title); ?></strong> and start teaching</p>

<?php include __DIR__ . '/email-footer.php'; ?>
