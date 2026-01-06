<?php
$items = $items ?? [
  [
    'name' => 'Course Title',
    'qty' => 1,
    'price' => '$199.00',
    'total' => '$199.00'
  ]
];
?>
<table role="presentation" class="items-table">
  <tr>
    <th>Item</th>
    <th>Qty</th>
    <th>Price</th>
    <th class="items-total">Total</th>
  </tr>
  <?php foreach ($items as $item) : ?>
    <tr>
      <td><?php echo e($item['name'] ?? 'Item'); ?></td>
      <td><?php echo e($item['qty'] ?? 1); ?></td>
      <td><?php echo e($item['price'] ?? '$0.00'); ?></td>
      <td class="items-total"><?php echo e($item['total'] ?? '$0.00'); ?></td>
    </tr>
  <?php endforeach; ?>
</table>
