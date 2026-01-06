<?php
$course_grade = $course_grade ?? '';
$course_name = $course_name ?? '';
$course_result_percent = $course_result_percent ?? '';
$course_url = $course_url ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Congrats! You have finished course <a target="_blank" href="<?php echo e($course_url); ?>">"<?php echo e($course_name); ?>"</a></p>

<p>You achieved <?php echo e($course_result_percent); ?> of course and your grade is <strong><?php echo e($course_grade); ?></strong></p>

<?php include __DIR__ . '/email-footer.php'; ?>
