import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Download } from 'lucide-react'

const Reports = () => (
  <div>
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Reports</h1>
        <p className="text-gray-600">Generate and view system reports</p>
      </div>
      <Button leftIcon={<Download className="w-4 h-4" />}>Export Report</Button>
    </div>
    <Card padding="lg"><p className="text-gray-600">Reports interface...</p></Card>
  </div>
)

export default Reports
