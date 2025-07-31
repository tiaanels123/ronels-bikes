'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { type Product } from '@/lib/types';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart!",
      description: (
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <span>{`${product.name} has been added to your shopping cart.`}</span>
        </div>
      ),
    });
  };

  return (
    <Button onClick={handleAddToCart} size="lg" className="mb-8 w-full md:w-auto bg-primary hover:bg-primary/90">
      <ShoppingCart className="mr-2 h-5 w-5" />
      Add to Cart
    </Button>
  );
}
