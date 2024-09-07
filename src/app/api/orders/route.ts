import { orders } from "@/db";
import db from "@/json/db.json";
import fs from "fs";

export async function GET(request: Request) {
  return Response.json(orders);
}

export async function POST(request: Request) {
  const order = await request.json();
  db.orders.push(order);
  fs.writeFileSync("./src/json/db.json", JSON.stringify(db, null, 2));
  return Response.json(order);
}

export async function PUT(request: Request) {
  const order = await request.json();
  const index = orders.findIndex((o) => o.id === order.id);
  orders[index] = order;
  return Response.json(order);
}

export async function DELETE(request: Request) {
  const order = await request.json();
  const index = orders.findIndex((o) => o.id === order.id);
  orders.splice(index, 1);
  return Response.json(order);
}
