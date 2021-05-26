import { Card } from "../card/Card.model";
import { Account } from "../account/Account.model";

export interface Transaction {
  card: Card;
  amount: number;
  description: string;
  transaction_date: string;
  account: Account;
  income: boolean;
}
