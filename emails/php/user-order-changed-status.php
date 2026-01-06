<?php
$order_detail_url = $order_detail_url ?? '';
$order_number = $order_number ?? '';
$order_status = $order_status ?? '';
$order_items_table = $order_items_table ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<?php if (!empty($order_items_table)) { echo $order_items_table; } else { include __DIR__ . '/order-items-table.php'; } ?>

Your order has just changed status to <strong><?php echo e($order_status); ?></strong>

<p>View order: <a href="<?php echo e($order_detail_url); ?>"><?php echo e($order_number); ?></a></p>

<?php include __DIR__ . '/email-footer.php'; ?>
