import { products } from '@/lib/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { formatPrice } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import AddToCartButton from '@/app/products/[id]/AddToCartButton';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }



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
          
          <AddToCartButton product={product} />

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
