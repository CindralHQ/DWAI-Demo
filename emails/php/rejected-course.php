<?php
$course_edit_url = $course_edit_url ?? '';
$course_name = $course_name ?? '';
$course_user_name = $course_user_name ?? '';
$login_url = $login_url ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Dear <strong><?php echo e($course_user_name); ?></strong>,

<p>Unfortunately! The course you created <a href="<?php echo e($course_edit_url); ?>"><?php echo e($course_name); ?></a> isn't ready for sale now.</p>

<p>Please <a href="<?php echo e($login_url); ?>">login</a> and update your course to meet our minimum requirements for quality and/or our policies.</p>

<?php include __DIR__ . '/email-footer.php'; ?>
