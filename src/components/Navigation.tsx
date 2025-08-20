import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Link, useLocation } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { label: 'Features', to: '/#features', show: true },
  { label: 'Login', to: '/login', show: true },
  { label: 'Sign Up', to: '/signup', show: true },
]

export function Navigation() {
  const location = useLocation()
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-40 border-b border-[#e0e7ef]">
      <div className="max-w-7xl mx-auto px-4 flex h-20 items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={clsx(navigationMenuTriggerStyle(), 'px-2 py-2 rounded-full')}> 
                <Link to="/">
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-8 h-8">
                      <img src={"/branding/assets/logo-0.png"} className="w-8 h-8" />
                    </span>
                    <span className="font-bold text-xl text-[#1d4ed8]" style={{fontFamily: 'Nunito'}}>Medishield</span>
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {navLinks.map(
              ({ label, to, show }) => show && (
                <NavigationMenuItem key={label}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link 
                      to={to} 
                      className={clsx('font-semibold text-base', location.pathname === to && 'text-[#1d4ed8] underline')}
                    >
                      {label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden md:flex gap-3 items-center">
          <Button asChild id="nav-login-button" variant="outline" className="border-[#1d4ed8] text-[#1d4ed8]">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild id="nav-signup-button" className="bg-[#1d4ed8] hover:bg-[#2563eb] text-white">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
