import Link from 'next/link'
import type { Tool } from '@/types'

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  if (!tool.metadata) {
    return null;
  }

  return (
    <Link href={`/tools/${tool.slug}`} className="card group">
      <div className="flex gap-2 mb-3">
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
      
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {tool.metadata.tool_name}
      </h3>
      
      {tool.metadata.description && (
        <p className="text-slate-400 text-sm line-clamp-3">
          {tool.metadata.description}
        </p>
      )}
      
      <div className="mt-4 flex gap-2">
        {tool.metadata.official_website && (
          <span className="text-xs text-slate-500">🌐 Website</span>
        )}
        {tool.metadata.github_repo && (
          <span className="text-xs text-slate-500">💻 GitHub</span>
        )}
      </div>
    </Link>
  )
}