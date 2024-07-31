"use client";

import React from "react";
import { agentData } from "@/constants";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "@/components/Shared/DataTable/DataTable";

const Page = () => {
  // const list = useMemo(
  //   () => [
  //     { id: 1, title: "List", value: "list" },
  //     { id: 2, title: "Setup", value: "setup" },
  //     { id: 3, title: "Reports", value: "report" },
  //   ],
  //   [],
  // );

  const ColumnConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Agent's Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "location", header: "Location" },
  ];

  const columns = createColumns(ColumnConfig);
  return (
    <div>
      <h1 className="mb-3 text-2xl text-sky-500">Agent List</h1>
      <DataTable
        columns={columns}
        data={agentData}
        enableColumnFilter={true}
        filteredBy="name"
      />
    </div>
  );
};

export default Page;
