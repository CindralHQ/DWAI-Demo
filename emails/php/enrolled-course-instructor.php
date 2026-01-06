<?php
$course_name = $course_name ?? '';
$course_url = $course_url ?? '';
$user_display_name = $user_display_name ?? '';
$user_email = $user_email ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>User <?php echo e($user_display_name); ?> (<?php echo e($user_email); ?>) has enrolled course  <a target="_blank" href="<?php echo e($course_url); ?>">"<?php echo e($course_name); ?>"</a></p>

<?php include __DIR__ . '/email-footer.php'; ?>
