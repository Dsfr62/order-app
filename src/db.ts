import db from "./json/db.json";

export interface IOrderItem {
  id: number;
  product: string;
  price: number;
  quantity: number;
}

export interface IOrder {
  id: number;
  date: string;
  customer: string;
  payment_method: string;
  items: IOrderItem[];
}

export const orders: IOrder[] = db.orders;
