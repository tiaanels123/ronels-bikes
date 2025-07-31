import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { formatPrice } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <Link href={`/products/${product.id}`} className="block">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.imageHints[0]}
            />
          </div>
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold font-headline text-lg leading-tight truncate pr-2">
                {product.name}
              </h3>
              <Badge variant="secondary" className="capitalize shrink-0">
                {product.category}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {product.description}
            </p>
            <div className="flex justify-between items-center pt-2">
                            <p className="text-xl font-bold text-primary">R {formatPrice(product.price)}</p>
              <Button variant="ghost" size="sm">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
