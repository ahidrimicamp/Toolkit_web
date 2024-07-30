// "use client";
import MerchantDetails from "@/components/merchants/MerchantDetails";
import MerchantSearch from "@/components/merchants/MerchantSearch";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { employees, merchantTabs } from "@/constants";
import React from "react";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";

export default function DataTableMerchant() {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "EmployeeID", header: "Employee ID" },
    { accessorKey: "FullName", header: "Full Name" },
    { accessorKey: "City", header: "City" },
    { accessorKey: "Country", header: "Country" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <div className="flex flex-col gap-5 2xl:flex-row">
        <div className="w-full rounded-md border border-gray-400 p-5 shadow-md 2xl:w-3/5">
          <Tabs defaultValue="mid" className="mb-4 w-full">
            <TabsList className="w-full">
              {merchantTabs.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="w-full"
                >
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {merchantTabs.map((item) => (
              <TabsContent key={item.value} value={item.value} className="mt-5">
                <h1 className="font-semibold">
                  Merchant - Find ({item.title})
                </h1>
                <MerchantSearch type={item.title} />
                <DataTable
                  columns={columns}
                  data={employees}
                  enableColumnFilter={true}
                  filteredBy="username"
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="w-full justify-center 2xl:w-2/5">
          <MerchantDetails />
        </div>
      </div>
    </>
  );
}
