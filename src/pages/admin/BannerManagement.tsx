import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Plus } from 'lucide-react'

const BannerManagement = () => (
  <div>
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Banner Management</h1>
        <p className="text-gray-600">Manage homepage banners and sliders</p>
      </div>
      <Button leftIcon={<Plus className="w-4 h-4" />}>Add Banner</Button>
    </div>
    <Card padding="lg"><p className="text-gray-600">Banner management interface...</p></Card>
  </div>
)

export default BannerManagement
