import React from 'react';
import { styles } from './styles';

type Props = {
  subject: string;
  preheader?: string;
  children: React.ReactNode;
  siteName?: string;
  siteUrl?: string;
  logoUrl?: string;
  supportEmail?: string;
  preview?: boolean;
  headerBackgroundUrl?: string;
};

export default function EmailLayout({
  subject,
  preheader = '',
  children,
  siteName = 'Discover Who Am I',
  siteUrl = 'https://discoverwhoami.com',
  logoUrl,
  supportEmail = 'admin@discoverwhoami.org',
  preview = false,
  headerBackgroundUrl,
}: Props) {
  const resolvedLogoUrl = logoUrl ?? (preview ? '/logo-white.png' : `${siteUrl}/logo-white.png`);
  const resolvedHeaderBackground =
    headerBackgroundUrl ?? (preview ? '/footerbg.png' : `${siteUrl}/footerbg.png`);
  const content = (
    <>
      <span style={styles.preheader}>{preheader}</span>
      <table role="presentation" style={styles.wrapper}>
        <tbody>
          <tr>
            <td align="center">
              <table role="presentation" style={styles.container}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        ...styles.header,
                      }}
                    >
                      <div
                        aria-hidden
                        style={{
                          ...styles.headerBg,
                          backgroundImage: `url('${resolvedHeaderBackground}')`,
                        }}
                      />
                      <div style={styles.headerInner}>
                        <table role="presentation" width="100%">
                          <tbody>
                            <tr>
                              <td style={styles.brand} align="center">
                                <img
                                  src={resolvedLogoUrl}
                                  alt={siteName}
                                  width={128}
                                  height={128}
                                  style={{ borderRadius: '28px', display: 'block', margin: '0 auto' }}
                                />
                                <span style={styles.brandName}>{siteName}</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.content}>{children}</td>
                  </tr>
                  <tr>
                    <td style={styles.footer}>
                      <p style={styles.p}>
                        Need help? Reach us at{' '}
                        <a href={`mailto:${supportEmail}`} style={styles.link}>
                          {supportEmail}
                        </a>{' '}
                        or visit{' '}
                        <a href={siteUrl} style={styles.link}>
                          {siteUrl}
                        </a>
                        .
                      </p>
                      <p style={{ ...styles.p, ...styles.muted }}>
                        You are receiving this email because of activity on your account. If this was not you,
                        contact support.
                      </p>
                      <p style={{ ...styles.p, ...styles.muted }}>
                        &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );

  if (preview) {
    return <div style={styles.body}>{content}</div>;
  }

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <title>{subject}</title>
      </head>
      <body style={styles.body}>{content}</body>
    </html>
  );
}
