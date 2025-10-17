import { motion } from 'framer-motion'
import {
  Users,
  Ticket,
  MessageSquare,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12.5%',
      isPositive: true,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Active Tickets',
      value: '156',
      change: '-8.2%',
      isPositive: true,
      icon: Ticket,
      color: 'bg-orange-500',
    },
    {
      title: 'Pending Enquiries',
      value: '43',
      change: '+5.3%',
      isPositive: false,
      icon: MessageSquare,
      color: 'bg-purple-500',
    },
    {
      title: 'FAQ Articles',
      value: '284',
      change: '+18.7%',
      isPositive: true,
      icon: TrendingUp,
      color: 'bg-green-500',
    },
  ]

  const recentTickets = [
    {
      id: 'TKT-1234',
      subject: 'Payment gateway not responding',
      requester: 'John Doe',
      priority: 'high',
      status: 'in-progress',
      createdAt: '2 hours ago',
    },
    {
      id: 'TKT-1233',
      subject: 'Unable to login to admin panel',
      requester: 'Jane Smith',
      priority: 'critical',
      status: 'open',
      createdAt: '4 hours ago',
    },
    {
      id: 'TKT-1232',
      subject: 'Request for new user role',
      requester: 'Bob Wilson',
      priority: 'medium',
      status: 'resolved',
      createdAt: '1 day ago',
    },
    {
      id: 'TKT-1231',
      subject: 'Transaction report discrepancy',
      requester: 'Alice Johnson',
      priority: 'low',
      status: 'in-progress',
      createdAt: '2 days ago',
    },
  ]

  const recentEnquiries = [
    {
      id: 'ENQ-892',
      name: 'Michael Chen',
      email: 'michael@example.com',
      subject: 'Integration with third-party API',
      status: 'new',
      createdAt: '1 hour ago',
    },
    {
      id: 'ENQ-891',
      name: 'Sarah Lee',
      email: 'sarah@example.com',
      subject: 'Pricing inquiry for enterprise plan',
      status: 'read',
      createdAt: '3 hours ago',
    },
    {
      id: 'ENQ-890',
      name: 'David Park',
      email: 'david@example.com',
      subject: 'Custom feature request',
      status: 'responded',
      createdAt: '5 hours ago',
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'danger'
      case 'high':
        return 'warning'
      case 'medium':
        return 'info'
      case 'low':
        return 'secondary'
      default:
        return 'secondary'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
      case 'new':
        return 'warning'
      case 'in-progress':
      case 'read':
        return 'info'
      case 'resolved':
      case 'responded':
        return 'success'
      case 'closed':
        return 'secondary'
      default:
        return 'secondary'
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover padding="md">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.isPositive ? (
                      <ArrowUp className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 mr-1" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Tickets */}
        <Card padding="none">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-display font-semibold text-gray-900">Recent Tickets</h2>
              <a href="/admin/tickets" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </a>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {recentTickets.map((ticket) => (
              <div key={ticket.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-mono text-gray-500">{ticket.id}</span>
                      <Badge variant={getPriorityColor(ticket.priority)} size="sm">
                        {ticket.priority}
                      </Badge>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{ticket.subject}</h3>
                    <p className="text-sm text-gray-600">by {ticket.requester}</p>
                  </div>
                  <Badge variant={getStatusColor(ticket.status)} size="sm">
                    {ticket.status}
                  </Badge>
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <Clock className="w-3 h-3 mr-1" />
                  {ticket.createdAt}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Enquiries */}
        <Card padding="none">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-display font-semibold text-gray-900">Recent Enquiries</h2>
              <a href="/admin/enquiries" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </a>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {recentEnquiries.map((enquiry) => (
              <div key={enquiry.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-mono text-gray-500">{enquiry.id}</span>
                      {enquiry.status === 'new' && (
                        <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-medium rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{enquiry.subject}</h3>
                    <p className="text-sm text-gray-600">{enquiry.name} • {enquiry.email}</p>
                  </div>
                  <Badge variant={getStatusColor(enquiry.status)} size="sm">
                    {enquiry.status}
                  </Badge>
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <Clock className="w-3 h-3 mr-1" />
                  {enquiry.createdAt}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card padding="md">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Resolved Today</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </Card>

        <Card padding="md">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Response Time</p>
              <p className="text-2xl font-bold text-gray-900">2.4h</p>
            </div>
          </div>
        </Card>

        <Card padding="md">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Urgent Tickets</p>
              <p className="text-2xl font-bold text-gray-900">7</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AdminDashboard
