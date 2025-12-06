import { getTools } from '@/lib/cosmic'
import ToolCard from '@/components/ToolCard'
import ToolFilters from '@/components/ToolFilters'

export default async function ToolsPage() {
  const tools = await getTools();

  return (
    <div className="container-custom py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Security Tools</h1>
        <p className="text-xl text-slate-300">
          Discover essential security tools with installation guides, usage examples, 
          and practical tips for bug bounty hunting.
        </p>
      </div>

      <ToolFilters tools={tools} />
    </div>
  )
}