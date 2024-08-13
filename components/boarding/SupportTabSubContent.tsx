"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { adjustmentTable } from "@/constants";
import { DataTypes } from "@/types";


const MyTickets = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Agent", header: "Agent" },
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section className=" mt-4 text-start max-2xl:flex-wrap gap-2">
        
        <div className="grid grid-cols-1 overflow-auto">
          <DataTable
            columns={columns}
            data={adjustmentTable}
            enableSorting={true}
            enableColumnFilter={true}
            filteredBy="brand"
          />
        </div>
      </section>
    </>
  )
}

const Solved = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Agent", header: "Agent" },
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section className=" mt-4 text-start max-2xl:flex-wrap gap-2">
        
        <div className="grid grid-cols-1 overflow-auto">
          <DataTable
            columns={columns}
            data={adjustmentTable}
            enableSorting={true}
            enableColumnFilter={true}
            filteredBy="brand"
          />
        </div>
      </section>
    </>
  )
}



export default function RenderSupportTabComponents(value: string) {
  switch (value) {

    case "myTickets":
      return <MyTickets />;
    case "solved":
      return <Solved />;
  }
}
