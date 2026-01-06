import React from 'react';
import { styles } from './styles';

type Item = {
  name: string;
  quantity: number;
  price: string;
  total: string;
};

type Props = {
  items?: Item[];
};

const fallbackItems: Item[] = [
  {
    name: 'Course Title',
    quantity: 1,
    price: '$199.00',
    total: '$199.00',
  },
];

export function OrderItemsTable({ items }: Props) {
  const resolvedItems = items && items.length ? items : fallbackItems;

  return (
    <table role="presentation" style={styles.itemsTable}>
      <thead>
        <tr>
          <th style={styles.itemsHeader}>Item</th>
          <th style={styles.itemsHeader}>Qty</th>
          <th style={styles.itemsHeader}>Price</th>
          <th style={{ ...styles.itemsHeader, ...styles.itemsTotal }}>Total</th>
        </tr>
      </thead>
      <tbody>
        {resolvedItems.map((item, index) => {
          const isLast = index === resolvedItems.length - 1;
          const cellStyle = isLast
            ? { ...styles.itemsCell, borderBottom: 'none' }
            : styles.itemsCell;
          return (
            <tr key={`${item.name}-${index}`}>
              <td style={cellStyle}>{item.name}</td>
              <td style={cellStyle}>{item.quantity}</td>
              <td style={cellStyle}>{item.price}</td>
              <td style={{ ...cellStyle, ...styles.itemsTotal }}>{item.total}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
