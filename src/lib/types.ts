export type Category = 'bikes' | 'parts' | 'accessories';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  images: string[];
  imageHints: string[];
  specifications: { [key: string]: string };
}

export interface CartItem extends Product {
  quantity: number;
}
