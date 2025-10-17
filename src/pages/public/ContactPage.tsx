import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form data:', data)
    setIsLoading(false)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@cardbiz.com',
      link: 'mailto:support@cardbiz.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+60 3-1234 5678',
      link: 'tel:+60312345678',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Kuala Lumpur, Malaysia',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM, Sat: 9AM-1PM',
      link: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100">
              Have a question? We're here to help
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-6">
                  Feel free to reach out to us through any of the following channels. We'll get back to you as soon as possible.
                </p>
              </motion.div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Card hover={!!info.link} padding="md">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="flex items-start space-x-4"
                        >
                          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary-700" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary-700" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card padding="lg">
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800">
                      Thank you for contacting us! We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                      error={errors.name?.message}
                      required
                    />

                    <Input
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      error={errors.email?.message}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+60 12-345 6789"
                      {...register('phone')}
                      hint="Optional"
                    />

                    <Input
                      label="Subject"
                      placeholder="How can we help?"
                      {...register('subject', { required: 'Subject is required' })}
                      error={errors.subject?.message}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Please describe your inquiry in detail..."
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters',
                        },
                      })}
                      className={`
                        w-full px-4 py-2.5 border rounded-lg transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        resize-none
                        ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
                      `}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-gray-500">
                      We typically respond within 24 hours
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      isLoading={isLoading}
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card padding="lg" className="bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200">
              <div className="text-center">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-3">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  For urgent matters or immediate support, please call our support hotline or check our FAQ section for quick answers to common questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+60312345678">
                    <Button size="lg" leftIcon={<Phone className="w-5 h-5" />}>
                      Call Support: +60 3-1234 5678
                    </Button>
                  </a>
                  <a href="/faq">
                    <Button size="lg" variant="outline">
                      Browse FAQ
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
