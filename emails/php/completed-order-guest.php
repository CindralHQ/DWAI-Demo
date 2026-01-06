<?php
$order_key = $order_key ?? '';
$site_title = $site_title ?? '';
$order_items_table = $order_items_table ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Hi <strong>Guest</strong>,</p>

<p>Your recent order at <?php echo e($site_title); ?> has been completed.<p>

<p>See your order details below:</p>

<p>Order key: <?php echo e($order_key); ?></p>

<?php if (!empty($order_items_table)) { echo $order_items_table; } else { include __DIR__ . '/order-items-table.php'; } ?>

<?php include __DIR__ . '/email-footer.php'; ?>
