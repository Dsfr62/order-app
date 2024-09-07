"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { NewItems } from "./items";
import { Textarea } from "@/components/ui/textarea";

export default function New() {
  const [items, setItems] = useState<any[]>([
    {
      product: "Teste",
      quantity: 1,
      price: 0,
    },
  ]);

  return (
    <div className="flex flex-col gap-4 items-center w-[90vw]">
      <header className="mb-4 flex flex-col gap-4 w-full">
        <div className="w-full items-center justify-between flex flex-wrap">
          <h1 className="text-3xl font-bold">Novo Pedido</h1>
          <Link href="/">
            <Button type="button">Pedidos</Button>
          </Link>
        </div>
        <p className="text-lg">
          Todos os pedidos feitos pelo sistema serão listados aqui. Clique em um
          pedido para ver mais detalhes.
        </p>
      </header>
      <form className="w-full gap-4 grid grid-cols-1 md:grid-cols-2">
        <div className="text-lg">
          <label htmlFor="customer">Cliente</label>
          <Input type="text" id="customer" className="text-lg" />
        </div>
        <div className="text-lg">
          <label htmlFor="date">Data</label>
          <Input type="text" id="date" className="text-lg" />
        </div>
        <div className="text-lg col-span-2">
          <label htmlFor="payment_method">Método de pagamento</label>
          <Textarea id="payment_method" className="text-lg" />
        </div>
        <div className="w-full col-span-2 my-2">
          <NewItems items={items} setItems={setItems} />
        </div>
        <Button type="submit" className="col-span-2 text-lg">
          Salvar
        </Button>
      </form>
    </div>
  );
}
