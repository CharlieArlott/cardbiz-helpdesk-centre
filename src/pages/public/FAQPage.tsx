import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ThumbsUp, ThumbsDown, Check } from 'lucide-react'
import SearchBar from '@/components/ui/SearchBar'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FAQ, FAQCategory } from '@/types'

// Mock data - Replace with API call
const mockFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How do I reset my password?',
    answer: 'To reset your password, go to the login page and click on "Forgot Password". Enter your email address and we will send you a link to reset your password. Follow the instructions in the email to create a new password.',
    category: 'General',
    tags: ['password', 'account', 'login'],
    helpfulCount: 45,
    notHelpfulCount: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '2',
    question: 'What are the IPOS system requirements?',
    answer: 'The IPOS system requires Windows 10 or later, at least 4GB RAM, and an internet connection with minimum 10Mbps speed. For optimal performance, we recommend 8GB RAM and a stable broadband connection.',
    category: 'IPOS',
    tags: ['system', 'requirements', 'technical'],
    helpfulCount: 32,
    notHelpfulCount: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '3',
    question: 'How do I configure the Payment Gateway?',
    answer: 'To configure the Payment Gateway, navigate to Settings > Payment Gateway in your admin panel. Enter your merchant credentials provided by the payment processor. Test the connection using the "Test Mode" before going live.',
    category: 'PGW',
    tags: ['payment', 'gateway', 'configuration'],
    helpfulCount: 28,
    notHelpfulCount: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '4',
    question: 'What is Leafy and how does it work?',
    answer: 'Leafy is our loyalty program management system that helps businesses create and manage customer reward programs. It includes features like point tracking, tier management, and automated rewards distribution.',
    category: 'Leafy',
    tags: ['loyalty', 'rewards', 'program'],
    helpfulCount: 21,
    notHelpfulCount: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '5',
    question: 'How do I add users to my corporate account?',
    answer: 'From your admin dashboard, go to User Management > Add User. Fill in the required information including name, email, and role. Send the invitation, and the new user will receive an email to set up their account.',
    category: 'Commercial/Corporate',
    tags: ['users', 'corporate', 'management'],
    helpfulCount: 38,
    notHelpfulCount: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '6',
    question: 'What payment methods are supported?',
    answer: 'We support all major credit and debit cards (Visa, Mastercard, American Express), online banking, e-wallets (GrabPay, Touch \'n Go), and QR code payments. The available methods may vary by region.',
    category: 'General',
    tags: ['payment', 'methods', 'transactions'],
    helpfulCount: 52,
    notHelpfulCount: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '7',
    question: 'How do I generate transaction reports?',
    answer: 'Navigate to Reports in your dashboard. Select the report type (Daily, Weekly, Monthly, or Custom). Choose your date range and filters, then click "Generate Report". You can export the report in PDF, Excel, or CSV format.',
    category: 'TMS',
    tags: ['reports', 'transactions', 'analytics'],
    helpfulCount: 19,
    notHelpfulCount: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '8',
    question: 'How do I troubleshoot connection issues?',
    answer: 'First, check your internet connection and firewall settings. Ensure that ports 80 and 443 are open. Clear your browser cache and cookies. If the issue persists, try accessing the system from a different browser or device. Contact support if problems continue.',
    category: 'General',
    tags: ['troubleshooting', 'connection', 'technical'],
    helpfulCount: 41,
    notHelpfulCount: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
]

const categories: FAQCategory[] = [
  'General',
  'IPOS',
  'PGW',
  'Leafy',
  'Commercial/Corporate',
  'Customized System',
  'TMS',
  'CBS',
  'CBP',
  'CBT',
]

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | 'All'>('All')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, 'helpful' | 'not-helpful'>>({})

  const filteredFAQs = useMemo(() => {
    let filtered = mockFAQs

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((faq) => faq.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query) ||
          faq.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [searchQuery, selectedCategory])

  const handleFeedback = (faqId: string, type: 'helpful' | 'not-helpful') => {
    setFeedbackGiven((prev) => ({ ...prev, [faqId]: type }))
    // Here you would send the feedback to the backend
    console.log(`Feedback for FAQ ${faqId}: ${type}`)
  }

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId)
  }

  const getCategoryCount = (category: FAQCategory | 'All') => {
    if (category === 'All') return mockFAQs.length
    return mockFAQs.filter((faq) => faq.category === category).length
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100">
              Search our knowledge base for quick answers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <SearchBar
              placeholder="Search for answers..."
              onSearch={setSearchQuery}
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Filter Sidebar */}
            <aside className="lg:col-span-1">
              <Card padding="md" className="sticky top-20">
                <h2 className="font-display font-semibold text-lg text-gray-900 mb-4">
                  Categories
                </h2>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`
                      w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200
                      flex items-center justify-between
                      ${
                        selectedCategory === 'All'
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    <span>All Categories</span>
                    <Badge variant="secondary" size="sm">
                      {getCategoryCount('All')}
                    </Badge>
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`
                        w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200
                        flex items-center justify-between
                        ${
                          selectedCategory === category
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }
                      `}
                    >
                      <span className="text-sm">{category}</span>
                      <Badge variant="secondary" size="sm">
                        {getCategoryCount(category)}
                      </Badge>
                    </button>
                  ))}
                </div>
              </Card>
            </aside>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-gray-900">
                  {selectedCategory === 'All' ? 'All Questions' : selectedCategory}
                </h2>
                <p className="text-gray-600 mt-1">
                  {filteredFAQs.length} {filteredFAQs.length === 1 ? 'result' : 'results'} found
                </p>
              </div>

              {filteredFAQs.length === 0 ? (
                <Card padding="lg">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search or filter to find what you're looking for
                    </p>
                  </div>
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => {
                    const isExpanded = expandedFAQ === faq.id
                    const feedback = feedbackGiven[faq.id]

                    return (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card padding="none" className="overflow-hidden">
                          <button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full text-left px-6 py-5 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="primary" size="sm">
                                    {faq.category}
                                  </Badge>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                  {faq.question}
                                </h3>
                              </div>
                              <ChevronDown
                                className={`
                                  w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200
                                  ${isExpanded ? 'rotate-180' : ''}
                                `}
                              />
                            </div>
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="px-6 pb-6 border-t border-gray-100">
                                  <div className="pt-4 pb-6">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                      {faq.answer}
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <span className="text-sm font-medium text-gray-700">
                                      Was this helpful?
                                    </span>
                                    {feedback ? (
                                      <div className="flex items-center gap-2 text-sm text-green-600">
                                        <Check className="w-4 h-4" />
                                        <span>Thank you for your feedback!</span>
                                      </div>
                                    ) : (
                                      <div className="flex items-center gap-2">
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() => handleFeedback(faq.id, 'helpful')}
                                          leftIcon={<ThumbsUp className="w-4 h-4" />}
                                        >
                                          Yes ({faq.helpfulCount})
                                        </Button>
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() => handleFeedback(faq.id, 'not-helpful')}
                                          leftIcon={<ThumbsDown className="w-4 h-4" />}
                                        >
                                          No ({faq.notHelpfulCount})
                                        </Button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              )}

              {/* Contact CTA */}
              <Card padding="lg" className="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200">
                <div className="text-center">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                    Didn't find what you're looking for?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our support team is here to help you with any questions
                  </p>
                  <Button variant="primary" size="lg">
                    Contact Support
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
