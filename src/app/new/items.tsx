"use client";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatBRL } from "@/utils/format-brl";
import { Plus, Trash } from "lucide-react";

interface NewItemsProps {
  items: any[];
  setItems: (items: any[]) => void;
}

export const NewItems = (props: NewItemsProps) => {
  const inputClassName =
    "rounded-lg text-lg py-2 px-1 border border-transparent focus:outline-none focus:border hover:border-blue-700 focus:border-neutral-300 active:border-neutral-300 ease-linear transition-all";

  const handleRemoveItem = (index: number) => {
    if (props.items.length === 1) {
      return alert("O pedido deve ter ao menos um item.");
    }
    const newItems = [...props.items];
    newItems.splice(index, 1);
    props.setItems(newItems);
  };

  const handleNewItem = () => {
    props.setItems([
      ...props.items,
      {
        product: "Item",
        quantity: 1,
        price: 0,
      },
    ]);
  };

  const handleChange = (index: number, key: string, value: string) => {
    const newItems = [...props.items];
    newItems[index][key] = value;
    props.setItems(newItems);
  };

  return (
    <Card className="w-full p-2">
      <Table>
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead>Ações</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.items.map((item, index) => (
            <TableRow key={index} className="text-lg">
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger type="button">
                      <Trash
                        className="w-4 h-4 ease-linear transition-all hover:text-red-700 cursor-pointer"
                        onClick={() => handleRemoveItem(index)}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="w-fit text-lg">
                      <p className="text-center">Remover item do pedido</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  className={inputClassName}
                  value={item.product}
                  onChange={(e) =>
                    handleChange(index, "product", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <input
                  type="number"
                  className={inputClassName}
                  value={item.quantity}
                  onChange={(e) =>
                    handleChange(index, "quantity", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  className={inputClassName}
                  value={item.price}
                  onChange={(e) => handleChange(index, "price", e.target.value)}
                />
              </TableCell>
              <TableCell className="text-right">
                {formatBRL(item.price * item.quantity)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="text-lg">
            <TableCell colSpan={4} onClick={handleNewItem}>
              <span className="flex items-center gap-3 hover:text-blue-700 cursor-pointer ease-linear transition-all">
                <Plus className="w-4 h-4" />
                Novo
              </span>
            </TableCell>
            <TableCell className="text-right">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {formatBRL(
                      props.items.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                    )}
                  </TooltipTrigger>
                  <TooltipContent className="w-[264px] text-lg">
                    <p className="text-center">
                      O total é calculado multiplicando a quantidade de cada
                      item pelo seu preço.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  );
};
