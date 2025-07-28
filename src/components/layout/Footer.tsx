import Link from 'next/link';
import { Bike } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Bike className="h-5 w-5" />
            <span className="font-bold font-headline">Ronel's Bikes Online</span>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ronel's Bikes Online. All rights reserved.
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary">Facebook</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Twitter</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
