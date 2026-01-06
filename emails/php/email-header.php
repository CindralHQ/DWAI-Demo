<?php
if (!function_exists('e')) {
  function e($value) {
    return htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8');
  }
}

$subject = $subject ?? ($email_heading ?? '');
$preheader = $preheader ?? '';
$site_title = $site_title ?? (function_exists('get_bloginfo') ? get_bloginfo('name') : '');
$site_name = $site_name ?? $site_title;
$site_url = $site_url ?? (function_exists('site_url') ? site_url() : '');
$logo_url = $logo_url ?? ($site_url ? ($site_url . '/logo-white.png') : '');
$support_email = $support_email ?? (function_exists('get_option') ? get_option('admin_email') : '');
?>
<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <title><?php echo e($subject); ?></title>
  <?php include __DIR__ . '/email-styles.php'; ?>
</head>
<body>
  <span class="preheader"><?php echo e($preheader); ?></span>
  <table role="presentation" class="wrapper">
    <tr>
      <td align="center">
        <table role="presentation" class="container">
          <tr>
            <td class="header">
              <div class="header-bg"></div>
              <div class="header-content">
                <table role="presentation" width="100%">
                  <tr>
                    <td class="brand" align="center">
                      <img src="<?php echo e($logo_url); ?>" alt="<?php echo e($site_name); ?>" width="128" height="128" style="border-radius: 28px; display: block; margin: 0 auto;" />
                      <span class="brand-name"><?php echo e($site_name); ?></span>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          <tr>
            <td class="content">
