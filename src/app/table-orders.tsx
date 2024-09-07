"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableFooter,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { db } from "@/constants";
import { formatBRL } from "@/utils/format-brl";
import { Eye, FileText } from "lucide-react";
import { useState } from "react";
import { DialogOrder } from "./dialog-order";

interface TableOrdersProps {}

export const TableOrders = (props: TableOrdersProps) => {
  const [search, setSearch] = useState("");

  let rows = db;
  rows = rows.filter((row) => {
    // filter by customer or date
    return (
      row.customer.toLowerCase().includes(search.toLowerCase()) ||
      row.date.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-full flex flex-col">
      <div className="my-2 flex flex-wrap items-center gap-4">
        <Input
          type="text"
          placeholder="Pesquisar pela data ou cliente"
          className="text-lg"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Card className="w-full p-3">
        <Table>
          <TableHeader>
            <TableRow className="text-lg border-b">
              <TableHead>Ações</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} className="text-lg">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger type="button">
                          <FileText className="w-4 h-4 stroke-[1.25px] ease-linear transition-all hover:text-blue-700 cursor-pointer" />
                        </TooltipTrigger>
                        <TooltipContent className="w-fit text-lg">
                          <p className="text-center">Exportar</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <DialogOrder order={row} />
                  </div>
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell className="text-right">
                  {formatBRL(row.total)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="text-lg">
              <TableCell colSpan={3}></TableCell>
              <TableCell className="text-right">
                {formatBRL(rows.reduce((acc, row) => acc + row.total, 0))}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </div>
  );
};
