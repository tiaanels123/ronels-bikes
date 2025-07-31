'use client';

import { products } from '@/lib/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

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
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${product.name} image ${index + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint={product.imageHints[index]}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        <div className="flex flex-col">
          <Badge variant="secondary" className="capitalize w-fit mb-2">
            {product.category}
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold font-headline">{product.name}</h1>
                    <p className="text-3xl font-bold text-primary mt-2 mb-4">R {formatPrice(product.price)}</p>
          <p className="text-muted-foreground text-base mb-6">{product.description}</p>
          
          <Button onClick={handleAddToCart} size="lg" className="mb-8 w-full md:w-auto bg-primary hover:bg-primary/90">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>

          <div>
            <h2 className="text-xl font-bold font-headline mb-4">Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-1">
                  <span className="font-medium text-muted-foreground">{key}</span>
                  <span className="text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
