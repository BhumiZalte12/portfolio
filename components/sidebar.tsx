import Link from "next/link"
import { BarChart, Home, Settings, Users } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4">
      <nav className="space-y-2">
        <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <BarChart className="h-5 w-5" />
          <span>Analytics</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <Users className="h-5 w-5" />
          <span>Users</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  )
}

