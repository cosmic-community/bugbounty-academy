'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import type { LearningModule } from '@/types'

interface ModuleCardProps {
  module: LearningModule;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const { t } = useLanguage()
  
  if (!module.metadata) {
    return null;
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
    <Link href={`/modules/${module.slug}`} className="card group">
      {module.metadata.featured_image?.imgix_url && (
        <img 
          src={`${module.metadata.featured_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
          alt={module.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      
      <div className="flex gap-2 mb-3">
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
      
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {module.metadata.module_title}
      </h3>
      
      {module.metadata.description && (
        <p className="text-slate-400 text-sm line-clamp-3">
          {module.metadata.description}
        </p>
      )}
      
      {module.metadata.estimated_time && (
        <div className="mt-4 text-sm text-slate-500">
          ⏱ {module.metadata.estimated_time}
        </div>
      )}
    </Link>
  )
}