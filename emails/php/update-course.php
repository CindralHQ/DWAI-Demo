<?php
$course_name = $course_name ?? '';
$course_url = $course_url ?? '';
$login_url = $login_url ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p><a href="<?php echo e($course_url); ?>"><?php echo e($course_name); ?></a> has just updated.</p>

<p>Please <a href="<?php echo e($login_url); ?>">login</a> and start learning now.</p>

<?php include __DIR__ . '/email-footer.php'; ?>
