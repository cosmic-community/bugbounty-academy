import { getLabExercises } from '@/lib/cosmic'
import LabCard from '@/components/LabCard'
import LabFilters from '@/components/LabFilters'

export default async function LabsPage() {
  const labs = await getLabExercises();

  return (
    <div className="container-custom py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Lab Exercises</h1>
        <p className="text-xl text-slate-300">
          Practice your skills with hands-on lab exercises featuring vulnerable code, 
          exploitation techniques, and remediation strategies.
        </p>
      </div>

      <LabFilters labs={labs} />
    </div>
  )
}