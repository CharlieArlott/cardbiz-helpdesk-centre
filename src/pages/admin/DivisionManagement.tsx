import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Plus } from 'lucide-react'

const DivisionManagement = () => (
  <div>
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Division Management</h1>
        <p className="text-gray-600">Manage department divisions</p>
      </div>
      <Button leftIcon={<Plus className="w-4 h-4" />}>Add Division</Button>
    </div>
    <Card padding="lg"><p className="text-gray-600">Division management interface...</p></Card>
  </div>
)

export default DivisionManagement
