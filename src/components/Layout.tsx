import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-light">
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  )
}
