"use client";
import React from "react";
import { DataTypes } from "@/types";
import { wavitSettingsTable } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";

const columnsConfig: ColumnConfig<DataTypes>[] = [
  { accessorKey: "Description", header: "Description" },
  { accessorKey: "Value", header: "Value" },
];

const columns = createColumns(columnsConfig);

const page = () => {
  return (
    <>
      <section>
        <div className="grid w-1/2 grid-cols-1 overflow-auto max-xl:w-auto">
          <DataTable
            columns={columns}
            data={wavitSettingsTable}
            enableColumnFilter={true}
            filteredBy="Documents"
            actionsColumn={false}
          />
        </div>
      </section>
    </>
  );
};

export default page;
