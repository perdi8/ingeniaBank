import { Account } from "../account/Account.model";

export interface Card {
  id: number;
  card_number: string;
  name_type: string;
  expiration_date: string;
  create_at: string;
  update_at: string;
  account: Account;
}

export interface CardList {
  cards: Card[];
  response: string;
}
