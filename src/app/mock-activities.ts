import { Activity } from './Activity';

export const ACTIVITES: Activity[] = [
  {
    id: 1,
    name: 'snowboarding in the alps',
    from: '14:00',
    to: '17:00',
    price: 100,
    complete: false,
    description: 'snowboarding',
    numOfPpl: 3,
  },
  {
    id: 2,
    name: 'hiking in Swedish Lappland',
    from: '16:00',
    to: '18:00',
    price: 300,
    complete: false,
    description: '',
    numOfPpl: 4,
  },
  {
    id: 3,
    name: 'fika time',
    from: '11:00',
    to: '11:30',
    price: 20,
    complete: false,
    description: '',
    numOfPpl: 2,
  },
];
