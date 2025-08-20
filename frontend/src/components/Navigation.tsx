import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Medical Records', to: '/medical-records' },
  { label: 'Appointments', to: '/appointments' },
  { label: 'Prescriptions', to: '/prescriptions' },
  { label: 'Messages', to: '/messages' },
  { label: 'Notifications', to: '/notifications' },
  { label: 'Upload', to: '/file-upload' },
  { label: 'Login', to: '/login', right: true },
  { label: 'Signup', to: '/signup', right: true },
]

export function Navigation() {
  const location = useLocation()
  return (
    <nav className="w-full bg-white border-b border-slate-100 py-0 px-0 shadow-sm sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between h-16 px-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/">
                  <img src="/branding/assets/logo-0.png" className="h-7 w-7 mr-2 inline-block align-middle" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {navLinks.filter(l => !l.right).map(link => (
              <NavigationMenuItem key={link.to}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === link.to ? ' bg-[#1d4ed8] text-white' : '')}>
                  <Link to={link.to}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3">
          {navLinks.filter(l => l.right).map(link => (
            <NavigationMenuLink asChild key={link.to} className={navigationMenuTriggerStyle() + (location.pathname === link.to ? ' bg-[#1d4ed8] text-white' : '')}>
              <Link to={link.to}>{link.label}</Link>
            </NavigationMenuLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
