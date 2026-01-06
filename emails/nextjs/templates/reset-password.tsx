import EmailLayout from '../components/EmailLayout';
import { EmailButton } from '../components/EmailButton';
import { DetailsTable } from '../components/DetailsTable';
import { styles } from '../components/styles';

type Props = {
  preview?: boolean;
  recipientName?: string;
  resetExpiry?: string;
  resetUrl?: string;
  supportUrl?: string;
};

export default function ResetPassword({
  recipientName = 'there',
  resetExpiry = '30 minutes',
  resetUrl = 'https://discoverwhoami.com/reset-password?token=sample',
  supportUrl = 'https://discoverwhoami.com/support',
  preview = false,
}: Props) {
  return (
    <EmailLayout preview={preview} subject="Reset your password" preheader="Use this link to reset your password.">
      <h1 style={styles.h1}>Reset your password</h1>
      <p style={styles.p}>Hi {recipientName},</p>
      <p style={styles.p}>We received a request to reset your password. If you did not request this, you can ignore this email.</p>
      <DetailsTable
        rows={[
          { label: 'Reset link expires in', value: resetExpiry },
          { label: 'Support', value: supportUrl },
        ]}
      />
      <EmailButton href={resetUrl} label="Reset password" />
      <p style={styles.note}>For security, do not share this link with anyone.</p>
    </EmailLayout>
  );
}
