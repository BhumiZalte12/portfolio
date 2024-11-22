import { Header } from "../../components/header"
import { Sidebar } from "../../components/sidebar"
import { DashboardWidgets } from "../../components/dashboard-widgets"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
            <div className="mt-4">
              <DashboardWidgets />
            </div>
            {/* Add more dashboard content here */}
          </div>
        </main>
      </div>
    </div>
  )
}

