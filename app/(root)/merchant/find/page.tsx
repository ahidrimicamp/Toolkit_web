"use client";

import React from "react";
import { employees } from "@/constants";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "@/components/Shared/DataTable/DataTable";
import MerchantDetails from "@/components/merchants/MerchantDetails";

const columnsConfig: ColumnConfig<DataTypes>[] = [
  { accessorKey: "EmployeeID", header: "ID" },
  { accessorKey: "FullName", header: "Name" },
  { accessorKey: "Address", header: "Address" },
  { accessorKey: "City", header: "City" },
  { accessorKey: "Region", header: "Region" },
  { accessorKey: "PostalCode", header: "Postal Code" },
  { accessorKey: "Country", header: "Country" },
  { accessorKey: "HomePhone", header: "Phone" },
  { accessorKey: "Position", header: "Position" },
  { accessorKey: "BirthDate", header: "Birth Date" },
];

const columns = createColumns(columnsConfig);

const Page = () => {
  return (
    <>
      <div className="flex gap-4 2xl:flex-row" >

        <DataTable
          columns={columns}
          data={employees}
          enableColumnFilter={true}
          filteredBy='UserID'
        />
        <div className="w-full 2xl:w-2/5 justify-center ">
          <MerchantDetails />

        </div>
      </div>

    </>

  )
}

export default Page;
