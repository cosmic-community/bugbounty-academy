// app/labs/[slug]/page.tsx
import { getLabExercise, getLabExercises } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from '@/components/CodeBlock'

interface LabPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const labs = await getLabExercises();
  return labs.map((lab) => ({
    slug: lab.slug,
  }));
}

export default async function LabPage({ params }: LabPageProps) {
  const { slug } = await params;
  const lab = await getLabExercise(slug);

  if (!lab || !lab.metadata) {
    notFound();
  }

  const difficultyColors: Record<string, string> = {
    'easy': 'badge-beginner',
    'medium': 'badge-intermediate',
    'hard': 'badge-advanced'
  };

  const difficultyClass = lab.metadata.difficulty?.key 
    ? difficultyColors[lab.metadata.difficulty.key] 
    : 'badge-beginner';

  return (
    <div className="container-custom py-12">
      <Link href="/labs" className="text-primary hover:text-primary-dark mb-6 inline-flex items-center gap-2">
        ← Back to Labs
      </Link>

      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex gap-3 mb-4">
            {lab.metadata.difficulty && (
              <span className={difficultyClass}>
                {lab.metadata.difficulty.value}
              </span>
            )}
            {lab.metadata.vulnerability_type && (
              <span className="badge bg-danger/20 text-danger">
                {lab.metadata.vulnerability_type.value}
              </span>
            )}
            {lab.metadata.cvss_score && (
              <span className="badge bg-warning/20 text-warning">
                CVSS: {lab.metadata.cvss_score}
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold mb-4">{lab.metadata.exercise_title}</h1>

          {/* Related Module */}
          {lab.metadata.related_module && (
            <div className="bg-dark-surface p-4 rounded-lg mb-6">
              <p className="text-sm text-slate-400 mb-2">Related Module:</p>
              <Link 
                href={`/modules/${lab.metadata.related_module.slug}`}
                className="text-primary hover:text-primary-dark font-medium"
              >
                {lab.metadata.related_module.title}
              </Link>
            </div>
          )}
        </header>

        {/* Vulnerable Code */}
        {lab.metadata.vulnerable_code && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Vulnerable Code</h2>
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: CodeBlock as any
                }}
              >
                {lab.metadata.vulnerable_code}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {/* Exploitation Steps */}
        {lab.metadata.exploitation_steps && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Exploitation Steps</h2>
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: CodeBlock as any
                }}
              >
                {lab.metadata.exploitation_steps}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {/* Remediation */}
        {lab.metadata.remediation && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Remediation</h2>
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: CodeBlock as any
                }}
              >
                {lab.metadata.remediation}
              </ReactMarkdown>
            </div>
          </section>
        )}
      </article>
    </div>
  )
}