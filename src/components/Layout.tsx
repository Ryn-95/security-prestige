import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-light">
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  )
}
