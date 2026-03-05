"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type goal = {
  id: string;
  name: string;
  target: number;
  current: number;
  unit?: string;
};

export type dailyGoal = {
  day: string;
  goals: goal[];
};

export type monthlyGoal = {
  month: string;
  goals: goal[];
};

export const columns: ColumnDef<goal>[] = [
  {
    accessorKey: "name",
    header: "Goal",
  },
  {
    accessorKey: "current",
    header: "Current",
    cell: ({ row }) => row.original.current,
  },
  {
    accessorKey: "target",
    header: "Target",
    cell: ({ row }) => row.original.target,
  },
  {
    id: "percent",
    header: "%",
    cell: ({ row }) => {
      const g = row.original;
      const pct = g.target ? (g.current / g.target) * 100 : 0;
      return pct.toFixed(0) + "%";
    },
  },
  {
    id: "bar",
    header: "Progress",
    cell: ({ row }) => {
      const g = row.original;
      const pct = g.target ? g.current / g.target : 0;
      const filled = Math.round(pct * 10);
      return "■".repeat(filled) + "□".repeat(10 - filled);
    },
  },
];

export function DataTable({ initialData }: { initialData: goal[] }) {
  const [data] = useState<goal[]>(initialData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
