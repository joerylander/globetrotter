export interface Activity {
  id?: number;
  name: string;
  to: number;
  from: number;
  price: number;
  complete: boolean;
  description?: string;
  numOfPpl: number;
}
