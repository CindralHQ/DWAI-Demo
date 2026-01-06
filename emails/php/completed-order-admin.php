<?php
$order_user_name = $order_user_name ?? '';
$order_items_table = $order_items_table ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Order placed by <strong><?php echo e($order_user_name); ?></strong> has been completed</p>

<?php if (!empty($order_items_table)) { echo $order_items_table; } else { include __DIR__ . '/order-items-table.php'; } ?>

<?php include __DIR__ . '/email-footer.php'; ?>
