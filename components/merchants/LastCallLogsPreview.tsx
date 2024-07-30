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
    <div className="mb-3 mt-0 max-h-60 grow overflow-hidden rounded-lg border border-solid border-gray-600 p-4">
      <h1 className="text-3xl text-sky-500">Last Call Logs Preview</h1>
      <div className="my-2 rounded-lg">
        {callLogs.map((item) => {
          return (
            <>
              <div
                className={`${item.id === 1 ? "bg-gray-700 text-white" : ""} ${item.id % 2 === 0 ? "bg-gray-200" : "bg-gray-300"} flex p-1`}
              >
                <div className="flex-1">{item.date}</div>
                <div className="flex-1">{item.username}</div>
                <div className="flex-1">{item.notes}</div>
              </div>
            </>
          );
        })}
        <div className="mb-3 mt-0 max-h-60 grow overflow-hidden rounded-lg border border-solid border-gray-400 p-4 shadow-md">
          <h1 className="text-3xl text-sky-500">Last Call Logs Preview</h1>
          <div className="my-2 rounded-lg">
            {callLogs.map((item) => {
              return (
                <>
                  <div
                    className={`${item.id === 1 ? "bg-gray-700 text-white" : ""} ${item.id % 2 === 0 ? "bg-gray-200" : "bg-gray-300"} flex p-1`}
                  >
                    <div className="flex-1">{item.date}</div>
                    <div className="flex-1">{item.username}</div>
                    <div className="flex-1">{item.notes}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastCallLogsPreview;
