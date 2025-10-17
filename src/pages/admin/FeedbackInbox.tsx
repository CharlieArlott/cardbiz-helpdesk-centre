import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { ThumbsUp, ThumbsDown, Clock } from 'lucide-react'

const FeedbackInbox = () => {
  const feedbacks = [
    { id: 'FB-123', type: 'faq-helpful', faqId: 'FAQ-45', comment: 'Very helpful!', time: '2h ago' },
    { id: 'FB-122', type: 'faq-not-helpful', faqId: 'FAQ-32', comment: 'Needs more detail', time: '5h ago' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Feedback Inbox</h1>
        <p className="text-gray-600">View and manage user feedback</p>
      </div>
      <Card padding="none">
        <div className="divide-y divide-gray-200">
          {feedbacks.map((fb) => (
            <div key={fb.id} className="p-6 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {fb.type === 'faq-helpful' ? (
                    <ThumbsUp className="w-5 h-5 text-green-500 mt-1" />
                  ) : (
                    <ThumbsDown className="w-5 h-5 text-red-500 mt-1" />
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-mono text-gray-500">{fb.id}</span>
                      <Badge variant={fb.type === 'faq-helpful' ? 'success' : 'warning'} size="sm">
                        {fb.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">FAQ: {fb.faqId}</p>
                    <p className="text-gray-900">{fb.comment}</p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {fb.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default FeedbackInbox
