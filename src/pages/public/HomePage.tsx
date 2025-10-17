import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, HelpCircle, MessageSquare } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const HomePage = () => {
  const popularCategories = [
    { name: 'General', count: 45, color: 'bg-blue-500' },
    { name: 'IPOS', count: 32, color: 'bg-green-500' },
    { name: 'PGW', count: 28, color: 'bg-purple-500' },
    { name: 'Leafy', count: 21, color: 'bg-orange-500' },
    { name: 'TMS', count: 19, color: 'bg-indigo-500' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Welcome to CardBiz Helpdesk Centre
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-primary-100 mb-8"
            >
              Your trusted partner for support and solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/faq">
                <Button size="lg" variant="ghost" className="bg-white text-primary-700 hover:bg-gray-100 shadow-lg">
                  Browse FAQs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Support
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our most frequently accessed help topics
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {popularCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link to={`/faq?category=${category.name}`}>
                  <Card hover padding="md" className="h-full">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                        <HelpCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{category.name}</h3>
                        <p className="text-sm text-gray-500">{category.count} articles</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="outline" size="lg">
                View All Categories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our support team is ready to help you with any inquiries
            </p>
            <Link to="/contact">
              <Button size="lg" variant="ghost" className="bg-white text-primary-700 hover:bg-gray-100 shadow-lg">
                Contact Us Now
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
