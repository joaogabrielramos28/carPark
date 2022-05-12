export interface IPark {
  id: string;
  address?: string;
  images: string[];
  main_image: string;
  name: string;
  period: string;
  price: number;
  spots: ISpotsProps[];
  state: string;
  rating?: string;
  created_at?: Date;
}

export interface ISpotsProps {
  checked: boolean;
  name: string;
}
