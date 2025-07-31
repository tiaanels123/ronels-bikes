'use client';

import Link from 'next/link';
import { ShoppingCart, Bike } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import CartSheet from '@/components/cart/CartSheet';
import { useState } from 'react';

export default function Header() {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Bike className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">Ronel's Bikes Online</span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <NavLink href="/products?category=bikes">Bikes</NavLink>
            <NavLink href="/products?category=parts">Parts</NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
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
  return (
    <Link
      href={href}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary font-headline"
    >
      {children}
    </Link>
  );
}
