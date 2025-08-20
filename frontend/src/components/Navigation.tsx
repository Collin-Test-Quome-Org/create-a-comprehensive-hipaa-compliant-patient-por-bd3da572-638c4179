import { Link, useLocation } from 'react-router-dom'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { ShieldCheck } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/appointments', label: 'Appointments' },
  { to: '/medical-records', label: 'Records' },
  { to: '/prescriptions', label: 'Prescriptions' },
  { to: '/messaging', label: 'Messaging' },
  { to: '/notifications', label: 'Notifications' },
  { to: '/file-upload', label: 'Documents' },
]

export function Navigation() {
  const location = useLocation()

  return (
    <nav className="w-full shadow bg-white sticky top-0 z-40 border-b border-slate-100">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="flex items-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={clsx(navigationMenuTriggerStyle(), 'mr-4 p-1 bg-transparent hover:bg-slate-50 rounded-full')}>  
                <Link to="/" aria-label="Go to home">
                  <img src="/branding/assets/logo-0.png" className="w-10 h-10 inline-block align-middle mr-2" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {navLinks.map(link => (
              <NavigationMenuItem key={link.to}>
                <NavigationMenuLink asChild className={clsx(
                  navigationMenuTriggerStyle(),
                  location.pathname === link.to && 'bg-blue-50 text-blue-700',
                  'rounded-md'
                )}>
                  <Link to={link.to} id={`nav-link-${link.label.toLowerCase().replace(/ /g, '-')}`}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" id="login-btn" className="font-bold text-blue-900 border-blue-200">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild variant="default" id="signup-btn" className="bg-blue-700 text-white hover:bg-blue-800">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
