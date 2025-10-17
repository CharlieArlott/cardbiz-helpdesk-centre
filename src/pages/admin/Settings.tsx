import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Save } from 'lucide-react'

const Settings = () => (
  <div>
    <div className="mb-8">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Settings</h1>
      <p className="text-gray-600">Configure system settings and preferences</p>
    </div>

    <div className="space-y-6">
      <Card padding="lg">
        <h2 className="text-xl font-display font-semibold text-gray-900 mb-4">Email Settings</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="SMTP Host" placeholder="smtp.example.com" />
            <Input label="SMTP Port" type="number" placeholder="587" />
          </div>
          <Input label="From Email" type="email" placeholder="noreply@cardbiz.com" />
          <Button leftIcon={<Save className="w-4 h-4" />}>Save Email Settings</Button>
        </div>
      </Card>

      <Card padding="lg">
        <h2 className="text-xl font-display font-semibold text-gray-900 mb-4">SMS Settings</h2>
        <div className="space-y-4">
          <Input label="SMS Gateway" placeholder="Enter gateway URL" />
          <Input label="API Key" type="password" placeholder="Enter API key" />
          <Button leftIcon={<Save className="w-4 h-4" />}>Save SMS Settings</Button>
        </div>
      </Card>

      <Card padding="lg">
        <h2 className="text-xl font-display font-semibold text-gray-900 mb-4">WhatsApp Settings</h2>
        <div className="space-y-4">
          <Input label="Business Account ID" placeholder="Enter account ID" />
          <Input label="Access Token" type="password" placeholder="Enter access token" />
          <Button leftIcon={<Save className="w-4 h-4" />}>Save WhatsApp Settings</Button>
        </div>
      </Card>
    </div>
  </div>
)

export default Settings
