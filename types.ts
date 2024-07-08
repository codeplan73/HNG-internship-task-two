export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  totalRating: number;
  color: string[];
  image: string;
}

export interface CartItem {
  id: number;
  product_id: number;
  name: string;
  price: number;
  color: string;
  image: string;
  quantity: number;
}
