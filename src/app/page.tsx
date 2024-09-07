import { Button } from "@/components/ui/button";
import { TableOrders } from "./table-orders";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center min-w-[80vw] ">
      <header className="mb-4 flex flex-col gap-4 w-full">
        <div className="w-full items-center justify-between flex flex-wrap">
          <h1 className="text-3xl font-bold">Pedidos</h1>
          <Button>Novo Pedido</Button>
        </div>
        <p className="text-lg">
          Todos os pedidos feitos pelo sistema serão listados aqui. Clique em um
          pedido para ver mais detalhes.
        </p>
      </header>
      <TableOrders />
    </div>
  );
}
