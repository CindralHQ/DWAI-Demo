import Link from 'next/link';
import { emailTemplates } from '@/emails/nextjs/registry';

const pageStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  background: '#F0F9FF',
  color: '#0F172A',
  minHeight: '100vh',
  padding: '32px 20px',
};

const headerStyle = {
  maxWidth: '960px',
  margin: '0 auto 24px',
};

const gridStyle = {
  maxWidth: '960px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '16px',
};

const cardStyle = {
  display: 'block',
  background: '#FFFFFF',
  border: '1px solid #BAE6FD',
  borderRadius: '14px',
  padding: '16px',
  textDecoration: 'none',
  color: 'inherit',
};

const slugStyle = {
  display: 'block',
  marginTop: '8px',
  color: '#0284C7',
  fontSize: '12px',
};

export default function EmailPreviewIndexPage() {
  return (
    <main style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={{ fontSize: '28px', margin: '0 0 8px', color: '#0C4A6E' }}>Email previews</h1>
        <p style={{ margin: 0, color: '#0369A1' }}>
          Browse all email templates and open a full preview in the browser.
        </p>
      </header>
      <section style={gridStyle}>
        {emailTemplates.map((template) => (
          <Link key={template.slug} href={`/email-preview/${template.slug}`} style={cardStyle}>
            <strong style={{ fontSize: '15px' }}>{template.title}</strong>
            <span style={slugStyle}>{template.slug}.tsx</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
