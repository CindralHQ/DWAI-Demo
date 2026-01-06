import React from 'react';
import { styles } from './styles';

type Props = {
  href: string;
  label: string;
};

export function EmailButton({ href, label }: Props) {
  return (
    <p style={styles.p}>
      <a href={href} style={styles.button}>
        {label}
      </a>
    </p>
  );
}
