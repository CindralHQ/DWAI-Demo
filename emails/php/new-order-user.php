<?php
$order_user_name = $order_user_name ?? '';
$site_title = $site_title ?? '';
$order_items_table = $order_items_table ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Hi <strong><?php echo e($order_user_name); ?></strong></p>

<p>We have received your order at <strong><?php echo e($site_title); ?></strong> and send you the details.<p>

<p>You can also login to your account to see more details.<p>

<?php if (!empty($order_items_table)) { echo $order_items_table; } else { include __DIR__ . '/order-items-table.php'; } ?>

<?php include __DIR__ . '/email-footer.php'; ?>
