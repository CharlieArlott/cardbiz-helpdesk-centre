import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Plus } from 'lucide-react'

const AnnouncementManagement = () => (
  <div>
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Announcement Management</h1>
        <p className="text-gray-600">Create and manage system announcements</p>
      </div>
      <Button leftIcon={<Plus className="w-4 h-4" />}>Add Announcement</Button>
    </div>
    <Card padding="lg"><p className="text-gray-600">Announcement management interface...</p></Card>
  </div>
)

export default AnnouncementManagement
