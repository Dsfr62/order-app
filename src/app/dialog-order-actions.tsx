"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DialogOrderActionsProps {
  order: any;
}

export const DialogOrderActions = (props: DialogOrderActionsProps) => {
  return (
    <div>
      <Button
        type="button"
        className="flex gap-3 items-center bg-transparent text-black hover:text-white"
        onClick={() => alert("Exportando PDF")}
      >
        <Download className="w-4 h-4" />
        Exportar PDF
      </Button>
    </div>
  );
};
