import Card from '@/components/ui/Card'
import { Mail, Clock } from 'lucide-react'

const EnquiryInbox = () => {
  const enquiries = [
    { id: 'ENQ-892', name: 'Michael Chen', subject: 'Integration inquiry', status: 'new', time: '1h ago' },
    { id: 'ENQ-891', name: 'Sarah Lee', subject: 'Pricing question', status: 'read', time: '3h ago' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Enquiry Inbox</h1>
        <p className="text-gray-600">Manage customer enquiries and messages</p>
      </div>
      <Card padding="none">
        <div className="divide-y divide-gray-200">
          {enquiries.map((enq) => (
            <div key={enq.id} className="p-6 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-mono text-gray-500">{enq.id}</span>
                      {enq.status === 'new' && <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-medium rounded-full">NEW</span>}
                    </div>
                    <h3 className="font-medium text-gray-900">{enq.subject}</h3>
                    <p className="text-sm text-gray-600">{enq.name}</p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {enq.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default EnquiryInbox
