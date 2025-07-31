import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Wrench, Bike, ShieldCheck, Award, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] text-white">
        <Image
          src="https://images.unsplash.com/photo-1654085888334-bc4b03bcbf10?q=80&w=1287&auto=format&fit=crop"
          alt="A cyclist on a scenic mountain road"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
            Your Adventure Awaits
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 drop-shadow-md">
            Discover premium motorbikes and gear for every journey.
          </p>
          <Link href="/products" passHref>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 px-8 rounded-full transition-transform hover:scale-105">
              Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard id="eco-100-dulux" name="ECO 100 Dulux" price="R 22,499" imageSrc="https://images.unsplash.com/photo-1685478565312-2ab3cb198d8b?q=80&w=2671&auto=format&fit=crop" />
            <ProductCard id="eco-150" name="ECO 150" price="R 31,899" imageSrc="https://images.unsplash.com/photo-1648300119079-792d50efce72?q=80&w=2670&auto=format&fit=crop" />
            <ProductCard id="eco-150tr-trail" name="ECO 150TR Trail" price="R 22,199" imageSrc="https://images.unsplash.com/photo-1657645157714-36cda0e30794?q=80&w=1334&auto=format&fit=crop" />
            <ProductCard id="xpluse-350" name="XPluse 350" price="R 41,200" imageSrc="https://images.unsplash.com/photo-1564347288823-dcdd367f3847?w=900&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">Why Choose Ronel's Bikes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <Feature icon={Award} title="Quality Craftsmanship" description="We source only the highest quality motorbikes and parts, ensuring peak performance and durability." />
            <Feature icon={ShieldCheck} title="Expert Support" description="Our team of motorbike enthusiasts is here to help you find the perfect bike and answer any questions." />
            <Feature icon={Truck} title="Fast & Reliable Shipping" description="Get your parts delivered to your doorstep quickly and securely, so you can start your next adventure." />
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CategoryCard href="/products?category=bikes" imageSrc="https://images.unsplash.com/photo-1727784658332-d5adfdf4d3bc?q=80&w=1287&auto=format&fit=crop" title="Bikes" description="Find the perfect motorbike for any road, from winding highways to city streets." icon={Bike} />
            <CategoryCard href="/products?category=parts" imageSrc="https://images.unsplash.com/photo-1637640125496-31852f042a60?q=80&w=1287&auto=format&fit=crop" title="Parts" description="Upgrade and maintain your ride with our high-quality components." icon={Wrench} />
          </div>
        </div>
      </section>


    </div>
  );
}

function CategoryCard({ href, imageSrc, title, description, icon: Icon }: { href: string; imageSrc: string; title: string; description: string; icon: React.ElementType }) {
  return (
    <Link href={href} passHref className="block group">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white">
        <div className="relative h-64 w-full">
          <Image src={imageSrc} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <CardHeader>
          <CardTitle className="flex items-center text-2xl font-headline">
            <Icon className="w-7 h-7 mr-3 text-accent" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

function ProductCard({ id, name, price, imageSrc }: { id: string; name: string; price: string; imageSrc: string }) {
  return (
    <Link href={`/products/${id}`}>
      <Card className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg h-full">
        <div className="relative h-64 w-full">
          <Image src={imageSrc} alt={name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-headline truncate">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold text-primary">{price}</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Bike className="mr-2 h-4 w-4" /> View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

function Feature({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-accent text-accent-foreground rounded-full p-4 mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-headline font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
}
