export interface Rating {
  rate: number;
  count: number; // usaremos 'count' para simular stock
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
