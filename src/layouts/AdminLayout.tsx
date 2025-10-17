import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Shield,
  Building2,
  Network,
  Layers,
  UserCircle,
  Ticket,
  BarChart3,
  Settings,
  HelpCircle,
  Image,
  Megaphone,
  Inbox,
  MessageSquare,
  ChevronDown,
  Menu,
  X,
  LogOut,
  Bell,
} from 'lucide-react'

export const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    {
      name: 'User Management',
      icon: Users,
      children: [
        { name: 'Users', href: '/admin/users', icon: Users },
        { name: 'Roles', href: '/admin/roles', icon: Shield },
      ],
    },
    {
      name: 'Company Management',
      icon: Building2,
      children: [
        { name: 'Companies', href: '/admin/companies', icon: Building2 },
        { name: 'Departments', href: '/admin/departments', icon: Network },
        { name: 'Divisions', href: '/admin/divisions', icon: Layers },
        { name: 'Client Profiles', href: '/admin/client-profiles', icon: UserCircle },
      ],
    },
    { name: 'Tickets', href: '/admin/tickets', icon: Ticket },
    {
      name: 'CMS',
      icon: HelpCircle,
      children: [
        { name: 'FAQ Management', href: '/admin/faq-management', icon: HelpCircle },
        { name: 'Banners', href: '/admin/banners', icon: Image },
        { name: 'Announcements', href: '/admin/announcements', icon: Megaphone },
      ],
    },
    {
      name: 'Inbox',
      icon: Inbox,
      children: [
        { name: 'Enquiries', href: '/admin/enquiries', icon: Inbox },
        { name: 'Feedback', href: '/admin/feedback', icon: MessageSquare },
      ],
    },
    { name: 'Reports', href: '/admin/reports', icon: BarChart3 },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ]

  const isActive = (href: string) => location.pathname === href

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handleLogout = () => {
    // Implement logout logic
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-30">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors hidden lg:block"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/admin" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-lg text-gray-900">CardBiz Admin</h1>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-700 font-semibold text-sm">AD</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@cardbiz.com</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside
        className={`
          hidden lg:block fixed left-0 top-16 bottom-0 bg-white border-r border-gray-200 z-20
          transition-all duration-300 overflow-y-auto
          ${sidebarOpen ? 'w-64' : 'w-20'}
        `}
      >
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            if (item.children) {
              const isExpanded = activeDropdown === item.name
              const hasActiveChild = item.children.some((child) => isActive(child.href))

              return (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg
                      transition-all duration-200
                      ${
                        hasActiveChild
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {sidebarOpen && <span className="font-medium">{item.name}</span>}
                    </div>
                    {sidebarOpen && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {isExpanded && sidebarOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-1 space-y-1"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`
                              flex items-center space-x-3 px-4 py-2 rounded-lg
                              transition-all duration-200
                              ${
                                isActive(child.href)
                                  ? 'bg-primary-50 text-primary-700'
                                  : 'text-gray-600 hover:bg-gray-50'
                              }
                            `}
                          >
                            <child.icon className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{child.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-lg
                  transition-all duration-200
                  ${
                    isActive(item.href)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40 top-16"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="lg:hidden fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 z-50 overflow-y-auto"
            >
              <nav className="p-4 space-y-1">
                {navigation.map((item) => {
                  if (item.children) {
                    const isExpanded = activeDropdown === item.name
                    const hasActiveChild = item.children.some((child) => isActive(child.href))

                    return (
                      <div key={item.name}>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`
                            w-full flex items-center justify-between px-4 py-3 rounded-lg
                            transition-all duration-200
                            ${
                              hasActiveChild
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-700 hover:bg-gray-50'
                            }
                          `}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-1 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`
                                    flex items-center space-x-3 px-4 py-2 rounded-lg
                                    transition-all duration-200
                                    ${
                                      isActive(child.href)
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }
                                  `}
                                >
                                  <child.icon className="w-4 h-4" />
                                  <span className="text-sm">{child.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`
                        flex items-center space-x-3 px-4 py-3 rounded-lg
                        transition-all duration-200
                        ${
                          isActive(item.href)
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }
                      `}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main
        className={`
          transition-all duration-300 pt-16
          ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}
        `}
      >
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
