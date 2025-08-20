import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Ghost className="w-20 h-20 text-secondary mb-4 animate-bounce" />
      <h1 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Page Not Found</h1>
      <p className="text-secondary-foreground mb-6">Oops, the page you're looking for has vanished into the ether.</p>
      <Button asChild id="return-home-btn">
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  );
}
