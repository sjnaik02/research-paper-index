"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Paper = {
  id: string;
  name: string;
  authors: string;
  plastic: string;
  microorganism: string;
};

export const columns: ColumnDef<Paper>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "authors",
    header: "Authors",
  },
  {
    accessorKey: "plastic",
    header: "Type of Plastic",
  },
  {
    accessorKey: "microorganism",
    header: "Type of Microorganism",
  },
];
