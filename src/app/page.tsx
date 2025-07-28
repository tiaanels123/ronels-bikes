import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Mountain, Wrench, Package } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] bg-primary text-primary-foreground">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Cyclist riding on a scenic route"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          data-ai-hint="cyclist scenic route"
        />
        <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 text-white drop-shadow-lg">
            Find Your Perfect Ride
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-primary-foreground/90 drop-shadow-md">
            Explore our collection of world-class bikes, parts, and accessories. Built for performance, designed for you.
          </p>
          <Link href="/products" passHref>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Shop All Products <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard
              href="/products?category=bikes"
              imageSrc="https://placehold.co/600x400.png"
              imageHint="mountain bike"
              title="Bikes"
              description="From rugged mountain trails to smooth city streets, find the bike that's right for you."
              icon={Mountain}
            />
            <CategoryCard
              href="/products?category=parts"
              imageSrc="https://placehold.co/600x400.png"
              imageHint="bicycle parts"
              title="Parts"
              description="Upgrade and maintain your ride with our high-quality components and spare parts."
              icon={Wrench}
            />
            <CategoryCard
              href="/products?category=accessories"
              imageSrc="https://placehold.co/600x400.png"
              imageHint="cycling accessories"
              title="Accessories"
              description="Helmets, apparel, and all the gear you need to enhance your cycling experience."
              icon={Package}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ href, imageSrc, imageHint, title, description, icon: Icon }: { href: string; imageSrc: string; imageHint: string; title: string; description: string; icon: React.ElementType }) {
  return (
    <Link href={href} passHref>
      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src={imageSrc}
              alt={title}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={imageHint}
            />
          </div>
          <div className="p-6 bg-card">
            <div className="flex items-center mb-2">
              <Icon className="w-6 h-6 mr-3 text-primary" />
              <h3 className="text-2xl font-headline font-semibold">{title}</h3>
            </div>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
