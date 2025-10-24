import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronRight, ThumbsUp, ThumbsDown, Check } from 'lucide-react'
import SearchBar from '@/components/ui/SearchBar'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FAQ, FAQCategoryNode } from '@/types'

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
    question: 'What are the uFirst system requirements?',
    answer: 'The uFirst system requires Windows 10 or later, at least 4GB RAM, and an internet connection with minimum 10Mbps speed. For optimal performance, we recommend 8GB RAM and a stable broadband connection.',
    category: 'Software > uFirst',
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
    category: 'Software > PGW',
    tags: ['payment', 'gateway', 'configuration'],
    helpfulCount: 28,
    notHelpfulCount: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '4',
    question: 'How do I handle merchant support issues in TMS?',
    answer: 'For merchant support in TMS, access the Merchant Portal through the admin dashboard. You can view merchant details, transaction history, and troubleshoot common issues. Use the built-in communication tools to respond to merchant queries.',
    category: 'Software > TMS > Merchant Support',
    tags: ['merchant', 'support', 'TMS'],
    helpfulCount: 21,
    notHelpfulCount: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '5',
    question: 'How do I manage terminal configurations in TMS?',
    answer: 'Terminal configurations can be managed through the TMS Terminal Support section. Navigate to Settings > Terminals, select the device, and update parameters like connection settings, transaction limits, and receipt templates.',
    category: 'Software > TMS > Terminal Support',
    tags: ['terminal', 'configuration', 'TMS'],
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
    question: 'How do I troubleshoot terminal hardware issues?',
    answer: 'First, check the physical connections and power supply. Ensure the terminal is properly connected to the network. Try restarting the device. If issues persist, check the TMS logs for error codes and contact hardware support.',
    category: 'Hardware > Terminal > TMS > Terminal Support',
    tags: ['hardware', 'terminal', 'troubleshooting'],
    helpfulCount: 19,
    notHelpfulCount: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '8',
    question: 'How do I manage merchant accounts on hardware terminals?',
    answer: 'Merchant accounts on hardware terminals can be managed through the Terminal TMS Merchant Support interface. Access the terminal settings, navigate to Merchant Configuration, and update merchant details, settlement schedules, and reporting preferences.',
    category: 'Hardware > Terminal > TMS > Merchant Support',
    tags: ['merchant', 'terminal', 'hardware'],
    helpfulCount: 41,
    notHelpfulCount: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '9',
    question: 'How do I use the POS system?',
    answer: 'The POS system provides a complete point-of-sale solution. Access it through the main menu, process transactions by scanning items or entering product codes, accept payments, and generate receipts. The system automatically syncs with inventory management.',
    category: 'Software > POS',
    tags: ['POS', 'transactions', 'sales'],
    helpfulCount: 55,
    notHelpfulCount: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
  {
    id: '10',
    question: 'What is EASy and how do I access it?',
    answer: 'EASy (Electronic Application System) streamlines business application processes. Access it through your dashboard under Software > EASy. Submit applications, track status, and manage documentation all in one place.',
    category: 'Software > EASy',
    tags: ['EASy', 'applications', 'workflow'],
    helpfulCount: 29,
    notHelpfulCount: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
  },
]

// Hierarchical category structure
const categoryTree: FAQCategoryNode[] = [
  {
    id: 'general',
    name: 'General',
    path: 'General',
  },
  {
    id: 'software',
    name: 'Software',
    path: 'Software',
    children: [
      { id: 'ufirst', name: 'uFirst', path: 'Software > uFirst' },
      { id: 'easy', name: 'EASy', path: 'Software > EASy' },
      { id: 'tams', name: 'TAMs', path: 'Software > TAMs' },
      { id: 'pos', name: 'POS', path: 'Software > POS' },
      { id: 'pgw', name: 'PGW', path: 'Software > PGW' },
      { id: 'ess', name: 'ESS', path: 'Software > ESS' },
      { id: 'ekedatangan', name: 'eKedatangan', path: 'Software > eKedatangan' },
      { id: 'efulfillment', name: 'eFulfillment', path: 'Software > eFulfillment' },
      { id: 'pcsy', name: 'PCSY', path: 'Software > PCSY' },
      {
        id: 'software-tms',
        name: 'TMS',
        path: 'Software > TMS',
        children: [
          { id: 'software-tms-merchant', name: 'Merchant Support', path: 'Software > TMS > Merchant Support' },
          { id: 'software-tms-terminal', name: 'Terminal Support', path: 'Software > TMS > Terminal Support' },
        ],
      },
    ],
  },
  {
    id: 'hardware',
    name: 'Hardware',
    path: 'Hardware',
    children: [
      {
        id: 'terminal',
        name: 'Terminal',
        path: 'Hardware > Terminal',
        children: [
          {
            id: 'hardware-terminal-tms',
            name: 'TMS',
            path: 'Hardware > Terminal > TMS',
            children: [
              { id: 'hardware-tms-merchant', name: 'Merchant Support', path: 'Hardware > Terminal > TMS > Merchant Support' },
              { id: 'hardware-tms-terminal', name: 'Terminal Support', path: 'Hardware > Terminal > TMS > Terminal Support' },
            ],
          },
        ],
      },
    ],
  },
]

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, 'helpful' | 'not-helpful'>>({})
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['software', 'hardware']))

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

  const getCategoryCount = (categoryPath: string) => {
    if (categoryPath === 'All') return mockFAQs.length
    // Count FAQs that match the category path exactly or start with it (for parent categories)
    return mockFAQs.filter((faq) =>
      faq.category === categoryPath || faq.category.startsWith(categoryPath + ' >')
    ).length
  }

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  const renderCategoryNode = (node: FAQCategoryNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expandedCategories.has(node.id)
    const count = getCategoryCount(node.path)
    const isSelected = selectedCategory === node.path

    return (
      <div key={node.id}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleCategory(node.id)
            }
            setSelectedCategory(node.path)
          }}
          className={`
            w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200
            flex items-center justify-between group
            ${isSelected
              ? 'bg-primary-50 text-primary-700 font-medium'
              : 'text-gray-700 hover:bg-gray-50'
            }
          `}
          style={{ paddingLeft: `${level * 12 + 16}px` }}
        >
          <div className="flex items-center gap-2 flex-1">
            {hasChildren && (
              <ChevronRight
                className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
                  isExpanded ? 'rotate-90' : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleCategory(node.id)
                }}
              />
            )}
            <span className="text-sm">{node.name}</span>
          </div>
          {count > 0 && (
            <Badge variant="secondary" size="sm">
              {count}
            </Badge>
          )}
        </button>
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {node.children!.map((child) => renderCategoryNode(child, level + 1))}
          </div>
        )}
      </div>
    )
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
                  Product FAQ
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
                  {categoryTree.map((category) => renderCategoryNode(category))}
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
