import Link from 'next/link';
import { notFound } from 'next/navigation';
import { emailTemplateMap, emailTemplates } from '@/emails/nextjs/registry';

const pageStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  background: '#F0F9FF',
  color: '#0F172A',
  minHeight: '100vh',
  padding: '24px 20px 40px',
};

const headerStyle = {
  maxWidth: '1100px',
  margin: '0 auto 20px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '12px',
};

const buttonStyle = {
  display: 'inline-block',
  background: '#0C4A6E',
  color: '#FFFFFF',
  padding: '8px 14px',
  borderRadius: '999px',
  textDecoration: 'none',
  fontSize: '13px',
};

const frameWrapStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  background: '#FFFFFF',
  border: '1px solid #BAE6FD',
  borderRadius: '16px',
  overflow: 'hidden',
};

const previewStyle = {
  width: '100%',
  minHeight: '80vh',
  background: '#FFFFFF',
};

export function generateStaticParams() {
  return emailTemplates.map((template) => ({ slug: template.slug }));
}

export default function EmailPreviewPage({ params }: { params: { slug: string } }) {
  const template = emailTemplateMap[params.slug];

  if (!template) {
    notFound();
  }

  const Template = template.Component;

  return (
    <main style={pageStyle}>
      <header style={headerStyle}>
        <div>
          <Link href="/email-preview" style={{ color: '#0C4A6E', textDecoration: 'none', fontSize: '13px' }}>
            ← Back to all emails
          </Link>
          <h1 style={{ fontSize: '26px', margin: '8px 0 4px', color: '#0C4A6E' }}>{template.title}</h1>
          <p style={{ margin: 0, color: '#0284C7', fontSize: '13px' }}>{template.slug}.tsx</p>
        </div>
        <Link href={`/email-preview/${template.slug}`} style={buttonStyle}>
          Refresh preview
        </Link>
      </header>
      <section style={frameWrapStyle}>
        <div style={previewStyle}>
          <Template preview />
        </div>
      </section>
    </main>
  );
}
