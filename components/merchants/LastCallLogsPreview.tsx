import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { accountStatusTable } from "@/constants";


const LastCallLogsPreview = () => {
  const callLogs = [
    {
      id: 1,
      date: "07/23/2024",
      username: "Tony Stark",
      notes: "This table was created.",
    },
    {
      id: 2,
      date: "07/23/2024",
      username: "HC",
      notes: "This table was edited.",
    },
    {
      id: 3,
      date: "07/24/2024",
      username: "Jimmy Page",
      notes: "This table will be changed by me.",
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "date", header: "Date" },
    { accessorKey: "username", header: "User Name" },
    { accessorKey: "notes", header: "Notes" },
  ];
  
  const columns = createColumns(columnsConfig);

  return (
    <>
      <div className="mb-3 mt-0  rounded-lg border border-solid border-gray-400 shadow-md p-4">
        <h1 className="text-3xl text-sky-500">Last Call Logs Preview</h1>
        <div className="my-2 rounded-lg">
          <DataTable
            columns={columns}
            data={callLogs}
            enableColumnFilter={true}
            filteredBy='UserID'
          />
        </div>
      </div>
    </>
  );
};

export default LastCallLogsPreview;
