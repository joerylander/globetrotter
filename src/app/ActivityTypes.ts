export interface Activity {
  id?: number;
  name: string;
  from: string;
  to: string;
  price: number;
  numOfPpl: number;
  notes: string;
  complete?: boolean;
}
