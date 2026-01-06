<?php
$course_name = $course_name ?? '';
$course_url = $course_url ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Congrats! You have enrolled course  <a target="_blank" href="<?php echo e($course_url); ?>">"<?php echo e($course_name); ?>"</a></p>

<?php include __DIR__ . '/email-footer.php'; ?>
