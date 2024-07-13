export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CurrencyPrice {
  USD: number[];
}

interface Photo {
  file_rename: boolean;
  filename: string;
  is_featured: boolean;
  is_public: boolean;
  model_id: string;
  model_name: string;
  organization_id: string;
  position: number;
  save_as_jpg: boolean;
  url: string;
}

export interface ProductData {
  debug: any | null;
  items: ProductItem[];
}

export interface ProductItem {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  current_price: CurrencyPrice[];
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  stock_id: string | null;
  product_image: any[];
  categories: any[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: any[];
  prices: any | null;
  stocks: any | null;
  is_deleted: boolean;
  available_quantity: number | null;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: any | null;
  featured_reviews: any | null;
  unavailability: any[];
}

export interface Product {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  current_price: number;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  stock_id: string | null;
  product_image: any[];
  categories: any[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  prices: any | null;
  stocks: any | null;
  is_deleted: boolean;
  available_quantity: number | null;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: any | null;
  featured_reviews: any | null;
  unavailability: any[];
}

export interface Collection {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  totalRating: number;
  color?: string[];
  image: string;
}
