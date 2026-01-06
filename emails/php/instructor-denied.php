<?php
$site_title = $site_title ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Your Become an Instructor request at <strong><?php echo e($site_title); ?></strong> has been denied</p>

<?php include __DIR__ . '/email-footer.php'; ?>
