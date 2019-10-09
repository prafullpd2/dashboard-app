import {Card} from './card.model';

export interface List {
  name: string;
  cards: Card[];
  id ?: number;
  position ?: number;
}
