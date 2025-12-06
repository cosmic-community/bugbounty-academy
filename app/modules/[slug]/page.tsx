// app/modules/[slug]/page.tsx
import { getLearningModule, getLearningModules } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from '@/components/CodeBlock'
import type { LearningModule } from '@/types'

interface ModulePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const modules = await getLearningModules();
  return modules.map((module: LearningModule) => ({
    slug: module.slug,
  }));
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params;
  const module = await getLearningModule(slug);

  if (!module || !module.metadata) {
    notFound();
  }

  const difficultyColors: Record<string, string> = {
    'beginner': 'badge-beginner',
    'intermediate': 'badge-intermediate',
    'advanced': 'badge-advanced',
    'expert': 'badge-expert'
  };

  const difficultyClass = module.metadata.difficulty_level?.key 
    ? difficultyColors[module.metadata.difficulty_level.key] 
    : 'badge-beginner';

  return (
    <div className="container-custom py-12">
      <Link href="/modules" className="text-primary hover:text-primary-dark mb-6 inline-flex items-center gap-2">
        ← Back to Modules
      </Link>

      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          {module.metadata.featured_image?.imgix_url && (
            <img 
              src={`${module.metadata.featured_image.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
              alt={module.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          
          <div className="flex gap-3 mb-4">
            {module.metadata.difficulty_level && (
              <span className={difficultyClass}>
                {module.metadata.difficulty_level.value}
              </span>
            )}
            {module.metadata.category && (
              <span className="badge bg-primary/20 text-primary">
                {module.metadata.category.value}
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold mb-4">{module.metadata.module_title}</h1>
          
          {module.metadata.description && (
            <p className="text-xl text-slate-300 mb-6">{module.metadata.description}</p>
          )}

          {/* Meta information */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-400 bg-dark-surface p-4 rounded-lg">
            {module.metadata.estimated_time && (
              <div>
                <strong className="text-slate-300">Duration:</strong> {module.metadata.estimated_time}
              </div>
            )}
          </div>
        </header>

        {/* Prerequisites */}
        {module.metadata.prerequisites && (
          <section className="mb-8 card bg-dark-surface">
            <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
            <p className="text-slate-300">{module.metadata.prerequisites}</p>
          </section>
        )}

        {/* Learning Objectives */}
        {module.metadata.learning_objectives && (
          <section className="mb-8 card bg-dark-surface">
            <h2 className="text-2xl font-bold mb-4">Learning Objectives</h2>
            <p className="text-slate-300 whitespace-pre-line">{module.metadata.learning_objectives}</p>
          </section>
        )}

        {/* Main Content */}
        {module.metadata.content && (
          <section className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code: CodeBlock as any
              }}
            >
              {module.metadata.content}
            </ReactMarkdown>
          </section>
        )}
      </article>
    </div>
  )
}