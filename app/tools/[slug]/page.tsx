// app/tools/[slug]/page.tsx
import { getTool, getTools } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from '@/components/CodeBlock'

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tools = await getTools();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = await getTool(slug);

  if (!tool || !tool.metadata) {
    notFound();
  }

  return (
    <div className="container-custom py-12">
      <Link href="/tools" className="text-primary hover:text-primary-dark mb-6 inline-flex items-center gap-2">
        ← Back to Tools
      </Link>

      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex gap-3 mb-4">
            {tool.metadata.category && (
              <span className="badge bg-primary/20 text-primary">
                {tool.metadata.category.value}
              </span>
            )}
            {tool.metadata.is_free ? (
              <span className="badge bg-success/20 text-success">Free</span>
            ) : (
              <span className="badge bg-warning/20 text-warning">Paid</span>
            )}
          </div>

          <h1 className="text-4xl font-bold mb-4">{tool.metadata.tool_name}</h1>

          {tool.metadata.description && (
            <p className="text-xl text-slate-300 mb-6">{tool.metadata.description}</p>
          )}

          {/* Links */}
          <div className="flex gap-4">
            {tool.metadata.official_website && (
              <a 
                href={tool.metadata.official_website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Official Website
              </a>
            )}
            {tool.metadata.github_repo && (
              <a 
                href={tool.metadata.github_repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub Repository
              </a>
            )}
          </div>
        </header>

        {/* Installation Guide */}
        {tool.metadata.installation_guide && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Installation Guide</h2>
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: CodeBlock as any
                }}
              >
                {tool.metadata.installation_guide}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {/* Usage Examples */}
        {tool.metadata.usage_examples && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: CodeBlock as any
                }}
              >
                {tool.metadata.usage_examples}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {/* Source Code */}
        {tool.metadata.source_code && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Source Code</h2>
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: CodeBlock as any
                }}
              >
                {tool.metadata.source_code}
              </ReactMarkdown>
            </div>
          </section>
        )}
      </article>
    </div>
  )
}