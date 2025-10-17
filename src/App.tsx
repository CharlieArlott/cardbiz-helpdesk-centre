import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PublicLayout } from './layouts/PublicLayout'
import { AdminLayout } from './layouts/AdminLayout'
import HomePage from './pages/public/HomePage'
import FAQPage from './pages/public/FAQPage'
import ContactPage from './pages/public/ContactPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import UserManagement from './pages/admin/UserManagement'
import RoleManagement from './pages/admin/RoleManagement'
import CompanyManagement from './pages/admin/CompanyManagement'
import DepartmentManagement from './pages/admin/DepartmentManagement'
import DivisionManagement from './pages/admin/DivisionManagement'
import ClientCompanyProfile from './pages/admin/ClientCompanyProfile'
import TicketManagement from './pages/admin/TicketManagement'
import Reports from './pages/admin/Reports'
import Settings from './pages/admin/Settings'
import FAQManagement from './pages/admin/FAQManagement'
import BannerManagement from './pages/admin/BannerManagement'
import AnnouncementManagement from './pages/admin/AnnouncementManagement'
import EnquiryInbox from './pages/admin/EnquiryInbox'
import FeedbackInbox from './pages/admin/FeedbackInbox'
import Login from './pages/auth/Login'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="roles" element={<RoleManagement />} />
          <Route path="companies" element={<CompanyManagement />} />
          <Route path="departments" element={<DepartmentManagement />} />
          <Route path="divisions" element={<DivisionManagement />} />
          <Route path="client-profiles" element={<ClientCompanyProfile />} />
          <Route path="tickets" element={<TicketManagement />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="faq-management" element={<FAQManagement />} />
          <Route path="banners" element={<BannerManagement />} />
          <Route path="announcements" element={<AnnouncementManagement />} />
          <Route path="enquiries" element={<EnquiryInbox />} />
          <Route path="feedback" element={<FeedbackInbox />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
