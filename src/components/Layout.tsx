import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (!header) return
      if (window.scrollY > 20) {
        header.classList.add('bg-white/95', 'backdrop-blur-md')
      } else {
        header.classList.remove('bg-white/95', 'backdrop-blur-md')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary-container selection:text-white">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

