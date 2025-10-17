export interface FAQ {
  id: string
  question: string
  answer: string
  category: FAQCategory
  tags: string[]
  helpfulCount: number
  notHelpfulCount: number
  createdAt: Date
  updatedAt: Date
  isPublished: boolean
}

export type FAQCategory =
  | 'General'
  | 'IPOS'
  | 'PGW'
  | 'Leafy'
  | 'Commercial/Corporate'
  | 'Customized System'
  | 'TMS'
  | 'CBS'
  | 'CBP'
  | 'CBT'

export interface User {
  id: string
  name: string
  email: string
  role: Role
  company?: Company
  department?: Department
  division?: Division
  status: 'active' | 'inactive'
  createdAt: Date
}

export interface Role {
  id: string
  name: string
  permissions: Permission[]
  description: string
}

export interface Permission {
  id: string
  name: string
  resource: string
  actions: ('create' | 'read' | 'update' | 'delete')[]
}

export interface Company {
  id: string
  name: string
  industry: string
  contactPerson: string
  email: string
  phone: string
  address: string
  status: 'active' | 'inactive'
  createdAt: Date
}

export interface Department {
  id: string
  name: string
  company: Company
  head?: User
  description: string
}

export interface Division {
  id: string
  name: string
  department: Department
  head?: User
  description: string
}

export interface Ticket {
  id: string
  subject: string
  description: string
  category: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  status: 'open' | 'in-progress' | 'resolved' | 'closed'
  requester: User
  assignedTo?: User
  createdAt: Date
  updatedAt: Date
  resolvedAt?: Date
}

export interface Enquiry {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: 'new' | 'read' | 'responded' | 'closed'
  createdAt: Date
}

export interface Feedback {
  id: string
  faqId?: string
  type: 'faq-helpful' | 'faq-not-helpful' | 'general'
  rating?: number
  comment?: string
  userAgent?: string
  createdAt: Date
}

export interface Banner {
  id: string
  title: string
  description?: string
  imageUrl: string
  linkUrl?: string
  order: number
  isActive: boolean
  startDate?: Date
  endDate?: Date
}

export interface Announcement {
  id: string
  title: string
  content: string
  type: 'info' | 'warning' | 'success' | 'error'
  isActive: boolean
  isPinned: boolean
  publishedAt?: Date
  expiresAt?: Date
  createdBy: User
}

export interface EmailSettings {
  smtpHost: string
  smtpPort: number
  smtpUsername: string
  smtpPassword: string
  fromEmail: string
  fromName: string
}

export interface NotificationSettings {
  email: boolean
  sms: boolean
  whatsapp: boolean
}
