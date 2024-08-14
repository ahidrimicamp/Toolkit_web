"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { merchantBoardingListTable } from "@/constants";
import { DataTypes } from "@/types";
import StartApplication from "@/components/boarding/StartApplication";

const page = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "BusinessName", header: "Client's business name" },
    { accessorKey: "LastUpdate", header: "Last Update" },
    { accessorKey: "City", header: "City" },
    { accessorKey: "Form", header: "Form" },
    { accessorKey: "Status", header: "Status" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section className="w-full">
        <StartApplication />

        <h2 className="mt-16 text-xl">
          Merchant Boarding List for <b>user@micamp.com</b>
        </h2>
        <div className="grid grid-cols-1 overflow-auto">
          <DataTable
            columns={columns}
            data={merchantBoardingListTable}
            enableSorting={true}
            enableColumnFilter={true}
            filteredBy="BusinessName"
          />
        </div>
      </section>
    </>
  );
};

export default page;
