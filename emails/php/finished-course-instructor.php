<?php
$course_grade = $course_grade ?? '';
$course_name = $course_name ?? '';
$course_result_percent = $course_result_percent ?? '';
$course_url = $course_url ?? '';
$user_display_name = $user_display_name ?? '';
$user_email = $user_email ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>User <?php echo e($user_display_name); ?> (<?php echo e($user_email); ?>) has finished course <a target="_blank" href="<?php echo e($course_url); ?>">"<?php echo e($course_name); ?>"</a></p>

<p>User has <strong><?php echo e($course_grade); ?></strong> course with <?php echo e($course_result_percent); ?> of total</p>

<?php include __DIR__ . '/email-footer.php'; ?>
