<?php
$course_name = $course_name ?? '';
$course_url = $course_url ?? '';
$user_name = $user_name ?? '';
$user_profile_url = $user_profile_url ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Dear <strong><?php echo e($user_name); ?>,</strong></p>

<p>You have finished the course <a target="_blank" href="<?php echo e($course_url); ?>"><?php echo e($course_name); ?></a></p>

<p>Please go to your profile <a target="_blank" href="<?php echo e($user_profile_url); ?>"><?php echo e($user_name); ?></a> and view your course results.</p>

<?php include __DIR__ . '/email-footer.php'; ?>
