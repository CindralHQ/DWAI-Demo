<?php
$site_title = $site_title ?? '';
$order_items_table = $order_items_table ?? '';
?>
<?php include __DIR__ . '/email-header.php'; ?>

<p>Hi <strong>Guest</strong>,</p>

<p>
    Thank you for purchasing course with <?php echo e($site_title); ?>!
    We have received your order and it is now being processed.
    We will send you an email once your order has been processed.
<p>

<p>See your order details below:</p>

<?php if (!empty($order_items_table)) { echo $order_items_table; } else { include __DIR__ . '/order-items-table.php'; } ?>

<?php include __DIR__ . '/email-footer.php'; ?>
