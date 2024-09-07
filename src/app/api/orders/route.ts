import { IOrder, orders } from "@/db";

export async function GET(request: Request): Promise<IOrder[]> {
  return orders;
}

export async function POST(request: Request): Promise<IOrder> {
  const order = await request.json();
  orders.push(order);
  return order;
}

export async function PUT(request: Request): Promise<IOrder> {
  const order = await request.json();
  const index = orders.findIndex((o) => o.id === order.id);
  orders[index] = order;
  return order;
}

export async function DELETE(request: Request): Promise<IOrder> {
  const order = await request.json();
  const index = orders.findIndex((o) => o.id === order.id);
  orders.splice(index, 1);
  return order;
}
