<?php
$templates = [
  'become-an-instructor.php',
  'cancelled-order-admin.php',
  'cancelled-order-guest.php',
  'cancelled-order-instructor.php',
  'cancelled-order-user.php',
  'completed-order-admin.php',
  'completed-order-guest.php',
  'completed-order-user.php',
  'enrolled-course-admin.php',
  'enrolled-course-instructor.php',
  'enrolled-course-user.php',
  'enrolled-course.php',
  'finished-course-admin.php',
  'finished-course-instructor.php',
  'finished-course-user.php',
  'finished-course.php',
  'instructor-accepted.php',
  'instructor-denied.php',
  'new-course.php',
  'new-order-admin.php',
  'new-order-guest.php',
  'new-order-instructor.php',
  'new-order-user.php',
  'processing-order-guest.php',
  'processing-order-user.php',
  'published-course.php',
  'rejected-course.php',
  'reset-password.php',
  'update-course.php',
  'user-order-changed-status.php',
  'user-order-completed.php',
];
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Email templates</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; background: #F0F9FF; color: #0F172A; padding: 24px; }
    h1 { font-family: Georgia, 'Times New Roman', serif; color: #0C4A6E; }
    ul { list-style: none; padding: 0; }
    li { margin: 10px 0; }
    a { color: #0C4A6E; text-decoration: none; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Email templates</h1>
  <p>Select a template to preview.</p>
  <ul>
    <?php foreach ($templates as $template) : ?>
      <li><a href="<?php echo htmlspecialchars($template, ENT_QUOTES, 'UTF-8'); ?>"><?php echo htmlspecialchars($template, ENT_QUOTES, 'UTF-8'); ?></a></li>
    <?php endforeach; ?>
  </ul>
</body>
</html>
