export interface MarketItem {
  id: string;
  name: string;
  armenianName?: string;
  category: 'bakery' | 'candies' | 'pantry' | 'deli' | 'beverages';
  description: string;
  origin: string;
  packagingNote: string;
  image?: string;
  highlights: string[];
  popular?: boolean;
}

export interface ListItem {
  item: MarketItem;
  quantity: number;
  checked: boolean;
  notes?: string;
}
