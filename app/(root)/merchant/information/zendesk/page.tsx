"use client";
import React from "react";
import { zenDeskTable } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";

const page = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "createdDate", header: "Created Date" },
    { accessorKey: "from", header: "From" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "subject", header: "Subject" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <div>
        <h1 className="mb-3 text-2xl text-sky-500">ZenDesk (1)</h1>
        <div className="w-full rounded-md  p-2">
          {/* <ExtremeDataTable
            pageSize={10}
            data={zenDeskTable}
            columnsToDisplay={["createdDate", "from", "name", "subject"]}
          /> */}
          <DataTable
            columns={columns}
            data={zenDeskTable}
            enableColumnFilter={true}
            filteredBy="username"
          />
        </div>
      </div>
    </>
  );
};

export default page;
