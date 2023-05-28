export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
    typeImg: string;
  };
  rating?: {
    rate: number;
    count: number;
  };
}
