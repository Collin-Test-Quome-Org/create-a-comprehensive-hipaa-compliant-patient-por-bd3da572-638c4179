import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { LogIn, UserPlus } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  {
    to: '/',
    label: '',
    logo: '/branding/assets/logo-0.png'
  },
  {
    to: '/login',
    label: 'Login',
    icon: <LogIn size={18} />
  },
  {
    to: '/signup',
    label: 'Sign Up',
    icon: <UserPlus size={18} />
  },
]

export function Navigation() {
  const location = useLocation()
  return (
    <nav className="w-full bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' px-2 py-0.5'}>
                <Link to="/" className="flex items-center gap-2">
                  <img src={navLinks[0].logo} className="w-9 h-9 rounded-full bg-white shadow" />
                  <span className="font-bold text-2xl tracking-tight text-[#1d4ed8]" style={{fontFamily: 'Nunito'}}>Medishield Portal</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <div className="flex ml-8 gap-2">
              {navLinks.slice(1).map((link) => (
                <NavigationMenuItem key={link.to}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === link.to ? ' bg-[#1d4ed8] text-white' : '')}>
                    <Link to={link.to} className="flex items-center gap-1">
                      {link.icon}
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
