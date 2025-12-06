import { getLearningModules } from '@/lib/cosmic'
import ModuleCard from '@/components/ModuleCard'
import ModuleFilters from '@/components/ModuleFilters'

export default async function ModulesPage() {
  const modules = await getLearningModules();

  return (
    <div className="container-custom py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Learning Modules</h1>
        <p className="text-xl text-slate-300">
          Master web application security through comprehensive courses covering SQL injection, 
          XSS, authentication bypass, and more.
        </p>
      </div>

      <ModuleFilters modules={modules} />
    </div>
  )
}