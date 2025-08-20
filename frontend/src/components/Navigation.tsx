import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-slate-200 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/">
                  <div className="flex items-center gap-2">
                    <img src="/branding/assets/logo-0.png" className="h-8 w-8" />
                  </div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/home">Dashboard</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <Button asChild id="login-button" variant="outline" className="font-semibold text-slate-900 border-slate-300 hover:bg-slate-100">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild id="signup-button" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
