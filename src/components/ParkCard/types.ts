export interface IParkCardProps {
  locale: string;
  name: string;
  spots: ISpotsProps[];
  rating: string;
  price: number;
  period: string;
  images?: string[];
  main_image?: string;
  id: string;
}

export interface ISpotsProps {
  checked: boolean;
  name: string;
}
