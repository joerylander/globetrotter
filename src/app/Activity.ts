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

export interface FormData {
  name: string;
  from: string;
  to: string;
  price: number;
  numOfPpl: number;
  notes: string;
}
