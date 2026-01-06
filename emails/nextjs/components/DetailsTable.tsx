import React from 'react';
import { styles } from './styles';

type Row = {
  label: string;
  value: React.ReactNode;
};

type Props = {
  rows: Row[];
};

export function DetailsTable({ rows }: Props) {
  return (
    <table role="presentation" style={styles.detailsTable}>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <td style={{ ...styles.detailCell, ...styles.detailLabel }}>{row.label}</td>
            <td style={{ ...styles.detailCell, ...styles.detailValue }}>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
