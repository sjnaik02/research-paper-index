import { data } from "@/lib/data";
import { columns, Paper } from "./columns";
import { DataTable } from "./data-table";
import { Microscope } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 bg-background dark">
      <h1 className="text-3xl font-semibold text-foreground pb-6 ">
        <Microscope className="inline" /> Research Paper Indexer
      </h1>
      <div className="max-w-6xl text-foreground w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
