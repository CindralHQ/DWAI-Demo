<?php
$course_edit_url = $course_edit_url ?? '';
$course_name = $course_name ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>A new course <a href="<?php echo e($course_edit_url); ?>"><?php echo e($course_name); ?></a> has been submitted is waiting for your approval</p>

<p>Please review course</p>

<?php include __DIR__ . '/email-footer.php'; ?>
