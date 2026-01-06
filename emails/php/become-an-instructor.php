<?php
$accept_url = $accept_url ?? '';
$admin_user_manager = $admin_user_manager ?? '';
$deny_url = $deny_url ?? '';
$request_email = $request_email ?? '';
$request_message = $request_message ?? '';
$request_phone = $request_phone ?? '';
$site_title = $site_title ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>User <?php echo e($request_email); ?> has requested to become an Instructor at <?php echo e($site_title); ?></p>

<p>Phone: <?php echo e($request_phone); ?></p>

<p>Message: <?php echo e($request_message); ?></p>

<p>Please login to <?php echo e($site_title); ?> and access <?php echo e($admin_user_manager); ?> to manage the requesting.</p>

<p>Accept the requesting: <?php echo e($accept_url); ?></p>

<p>Deny the requesting: <?php echo e($deny_url); ?></p>

<?php include __DIR__ . '/email-footer.php'; ?>
