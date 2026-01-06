<?php
$course_edit_url = $course_edit_url ?? '';
$course_name = $course_name ?? '';
$course_url = $course_url ?? '';
$course_user_name = $course_user_name ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Dear <strong><?php echo e($course_user_name); ?>,</strong></p>

<p>Congratulation! The course you created here <a href="<?php echo e($course_edit_url); ?>"><?php echo e($course_name); ?></a> is available now.</p>

<p>Click <a href="<?php echo e($course_url); ?>"><?php echo e($course_url); ?></a> to view your course.</p>

<?php include __DIR__ . '/email-footer.php'; ?>
