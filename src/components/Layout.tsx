import React from 'react'
import Header from './Header'

export default function Layout(props: any) {
  const { children } = props

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF]">
      <Header />

      <main className="px-32">{children}</main>
    </div>
  )
}
