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
} from "@/components/ui/table";
import { db } from "@/constants";
import { useState } from "react";

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
              <TableHead>Data</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} className="text-lg">
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
