"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatBRL } from "@/utils/format-brl";
import { Eye } from "lucide-react";
import { DialogOrderItems } from "./dialog-order-items";
import { DialogOrderActions } from "./dialog-order-actions";

interface DialogOrderProps {
  order: any;
}

export const DialogOrder = (props: DialogOrderProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger type="button">
              <Eye className="w-4 h-4 stroke-[1.25px] ease-linear transition-all hover:text-blue-700 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent className="w-fit text-lg">
              <p className="text-center">Ver detalhes do pedido</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes do pedido</DialogTitle>
        </DialogHeader>
        <div>
          <p>Cliente: {props.order.customer}</p>
          <p>Data: {props.order.date}</p>
          <p>Total: {formatBRL(props.order.total)}</p>
        </div>
        <DialogOrderActions order={props.order} />
        <DialogOrderItems order={props.order} />
      </DialogContent>
    </Dialog>
  );
};
