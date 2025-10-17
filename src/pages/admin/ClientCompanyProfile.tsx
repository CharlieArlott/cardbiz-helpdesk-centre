import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Plus } from 'lucide-react'

const ClientCompanyProfile = () => (
  <div>
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Client Company Profiles</h1>
        <p className="text-gray-600">Manage client company profiles and information</p>
      </div>
      <Button leftIcon={<Plus className="w-4 h-4" />}>Add Profile</Button>
    </div>
    <Card padding="lg"><p className="text-gray-600">Client company profile management...</p></Card>
  </div>
)

export default ClientCompanyProfile
