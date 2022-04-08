import { IconBaseProps } from "react-icons";

export interface ICardInfoProps {
  quantity: string;
  icon: React.FC<IconBaseProps>;
  type: string;
  isLast?: boolean;
}
