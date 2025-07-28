import { products } from '@/lib/products';
import ProductCard from '@/components/products/ProductCard';
import type { Category } from '@/lib/types';

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: Category };
}) {
  const { category } = searchParams;
  
  const filteredProducts = category 
    ? products.filter((p) => p.category === category) 
    : products;

  const title = category 
    ? `${category.charAt(0).toUpperCase() + category.slice(1)}` 
    : 'All Products';

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline">{title}</h1>
        <p className="text-muted-foreground mt-2">Browse our collection of high-quality {category || 'products'}.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
