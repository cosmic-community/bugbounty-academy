import Link from 'next/link'
import type { LabExercise } from '@/types'

interface LabCardProps {
  lab: LabExercise;
}

export default function LabCard({ lab }: LabCardProps) {
  if (!lab.metadata) {
    return null;
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
    <Link href={`/labs/${lab.slug}`} className="card group">
      <div className="flex gap-2 mb-3">
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
      </div>
      
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {lab.metadata.exercise_title}
      </h3>
      
      {lab.metadata.cvss_score && (
        <div className="mt-4 text-sm text-warning">
          🎯 CVSS: {lab.metadata.cvss_score}
        </div>
      )}
    </Link>
  )
}