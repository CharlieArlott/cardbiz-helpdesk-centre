import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Plus } from 'lucide-react'

const CompanyManagement = () => {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Company Management</h1>
            <p className="text-gray-600">Manage client companies</p>
          </div>
          <Button leftIcon={<Plus className="w-4 h-4" />}>Add Company</Button>
        </div>
      </div>
      <Card padding="lg">
        <p className="text-gray-600">Company management interface...</p>
      </Card>
    </div>
  )
}

export default CompanyManagement
