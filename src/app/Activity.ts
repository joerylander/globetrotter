export interface Activity {
  id?: number;
  name: string;
  to: string;
  from: string;
  price: number;
  complete: boolean;
  description?: string;
  numOfPpl: number;
}
