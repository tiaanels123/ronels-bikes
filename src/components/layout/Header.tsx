'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import CartSheet from '@/components/cart/CartSheet';
import { useState, Suspense } from 'react';

// Your SVG logo converted to a reusable React component
const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1080 334"
    {...props}
  >
    <defs>
      <style>{`.st0 { fill: currentColor; }`}</style>
    </defs>
    <g>
      <path className="st0" d="M73.55,51.11h86.15c35.08,0,55.84,17.85,55.84,46.92,0,20.06-11.05,32.76-28.85,38.83-1.11.38-1.88,1.4-1.88,2.58h0c0,.61.2,1.2.58,1.68l35.13,44.93v3.32h-42.35l-33.63-45.26h-34.25v45.26s-36.75,0-36.75,0V51.11ZM158.05,114.42c13.7,0,21.38-5.81,21.38-16.4s-7.68-16.61-21.38-16.61h-47.75v33.01h47.75Z"/>
      <path className="st0" d="M440.91,51.11h0c12.01,0,23.2,6.11,29.7,16.21l48.32,75.08c.52.81,1.41,1.29,2.37,1.29h0c1.56,0,2.82-1.26,2.82-2.82V51.11h35.92v103.11c0,19.41-15.74,35.15-35.15,35.15h0c-11.99,0-23.15-6.11-29.61-16.21l-48.8-76.32c-.52-.81-1.41-1.3-2.37-1.3h0c-1.56,0-2.82,1.26-2.82,2.82v91.02h-35.71v-102.94c0-19.51,15.81-35.32,35.32-35.32Z"/>
      <path className="st0" d="M577.31,51.11h124.77v30.52h-88.44v23.25h70.16v29.69h-70.16v24.29h89.27v30.52h-125.6V51.11Z"/>
      <path className="st0" d="M717,51.11h36.75v96.45c0,6.01,4.87,10.87,10.87,10.87h73.82v30.93h-71.87c-27.38,0-49.57-22.19-49.57-49.57V51.11Z"/>
      <path className="st0" d="M833.12,85.77h-2.56c-9.59,0-17.37-7.78-17.37-17.37h0c0-9.55,7.75-17.3,17.3-17.3h0c10.17,0,18.41,8.24,18.41,18.41v10.03c0,25.82-14.32,37.14-35.71,37.14v-15.55c12.04-1.04,19.31-3.74,19.93-15.36Z"/>
      <path className="st0" d="M856.98,144.73h37.78c3.32,12.04,16.61,18.48,40.9,18.48s34.67-5.19,34.67-13.91c0-7.27-6.64-10.38-25.33-12.66l-30.52-3.53c-34.25-3.94-52.73-16.82-52.73-41.31,0-27.4,25.33-43.6,66.64-43.6,45.46,0,70.38,17.85,73.49,44.43h-37.78c-2.7-10.17-15.15-15.36-35.91-15.36s-30.52,4.57-30.52,11.63c0,6.44,6.44,10.38,23.87,12.66l35.29,4.15c33.01,4.15,49.62,17.23,49.62,41.52,0,28.44-23.04,45.05-71.83,45.05s-73.91-16.19-77.64-47.54Z"/>
    </g>
    <g>
      <path className="st0" d="M258.22,239.62h40.7c14.23,0,20.35,5.28,20.35,13.01,0,5.59-3.06,8.8-9.26,10.33v.77c8.19,1.38,11.4,6.89,11.4,12.78,0,8.57-7.34,14.08-22.19,14.08h-41.01v-50.96ZM301.22,259.9c3.82,0,6.96-1.53,6.96-5.28,0-3.06-2.22-5.2-7.12-5.2h-31.21v10.48h31.37ZM302.14,280.79c5.59,0,8.26-2.07,8.26-5.74s-3.14-5.51-7.8-5.51h-32.75v11.25h32.29Z"/>
      <path className="st0" d="M398.31,239.62h11.63v50.96h-11.63v-50.96Z"/>
      <path className="st0" d="M490.73,239.62h11.63v23.18h1.53l38.56-23.18h17.21v1.15l-30.99,19.36v1.53l33.05,27.77v1.15h-16.22l-27.31-22.95h-1.53l-14.31,8.8v14.15h-11.63v-50.96Z"/>
      <path className="st0" d="M633.5,239.62h58.45v10.71h-46.82v9.33h40.4v10.56h-40.4v9.64h47.21v10.71h-58.84v-50.96Z"/>
      <path className="st0" d="M763.64,274.21h12.55c1.07,5.2,8.57,7.65,22.88,7.65s20.89-1.91,20.89-6.04c0-2.98-3.06-4.28-15.68-5.43l-14.38-1.3c-16.53-1.53-23.87-6.43-23.87-15.15,0-9.87,10.02-15.38,29-15.38,20.12,0,32.67,6.12,34.2,16.3h-12.55c-1.3-4.36-8.49-6.5-21.35-6.5s-18.29,1.45-18.29,4.9c0,2.91,3.6,4.67,15.23,5.74l16.91,1.61c15.53,1.45,21.88,6.2,21.88,14.69,0,10.79-10.63,16.37-32.06,16.37s-33.97-5.97-35.35-17.44Z"/>
    </g>
    <path className="st0" d="M394.65,58.73c24.85,17.82,8.88,49.11-2.92,64.51-14.66,19.14-36.17,37.04-68.19,50.89-15.23,6.59-30.04,11.04-44.42,13.36-59.63,9.6-73.22-17.1-75.54-24.5-4.96-15.78,4.29-33.78,15.43-48.33,19.33-25.23,48.69-43.49,71.22-52.91,14.4-6.01,73-25.56,104.41-3.03ZM390.24,70.79c-4.46-20.28-36.29-16.4-47.92-13.73-10.34,2.37-20.68,6.55-31.01,12.54-7.85,4.47-15.54,9.38-23.06,14.72-7.53,5.34-14.6,10.75-21.23,16.24-6.64,5.49-12.66,10.96-18.04,16.41-5.4,5.45-9.95,10.61-13.66,15.45-10.92,14.27-15.79,25.61-14.6,34.02,1.19,8.41,7.97,13.66,20.32,15.73,8.83,1.48,18.27.77,28.35-2.12,10.07-2.9,21.36-7.88,33.86-14.96,14.88-8.44,28.85-18.09,41.92-28.94,13.06-10.85,24.02-22.05,32.87-33.6,9.94-12.98,14.01-23.57,12.21-31.76Z"/>
  </svg>
);


export default function Header() {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-auto text-primary" />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Suspense fallback={<span className="text-gray-600">Bikes</span>}>
              <NavLink href="/products?category=bikes">Bikes</NavLink>
            </Suspense>
            <Suspense fallback={<span className="text-gray-600">Parts</span>}>
              <NavLink href="/products?category=parts">Parts</NavLink>
            </Suspense>
            <Suspense fallback={<span className="text-gray-600">About Us</span>}>
              <NavLink href="/about">About Us</NavLink>
            </Suspense>
            <Suspense fallback={<span className="text-gray-600">Contact Us</span>}>
              <NavLink href="/contact">Contact Us</NavLink>
            </Suspense>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              <ShoppingCart className="h-6 w-6 text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>
      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [hrefPath, hrefQuery] = href.split('?');
  const hrefParams = new URLSearchParams(hrefQuery);
  const hrefCategory = hrefParams.get('category');

  const currentCategory = searchParams.get('category');

  let isActive = false;
  if (pathname === hrefPath) {
    if (hrefCategory) {
      // This is a product category link
      if (currentCategory) {
        isActive = currentCategory === hrefCategory;
      } else {
        // If on /products without a category, 'bikes' is the default active link
        isActive = hrefCategory === 'bikes';
      }
    } else {
      // This is a non-product link like /about or /contact
      isActive = true;
    }
  }

  return (
    <Link
      href={href}
      className={`font-poppins text-base font-medium transition-colors relative group ${
        isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform origin-left duration-300 ease-out ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      ></span>
    </Link>
  );
}