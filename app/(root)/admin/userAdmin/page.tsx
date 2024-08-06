"use client";

import React from "react";
import { employees, usersTable } from "@/constants";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "@/components/Shared/DataTable/DataTable";
import MerchantDetails from "@/components/merchants/MerchantDetails";
import UserDetails from "@/components/admin/UserDetails";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Roles", header: "Roles" },
    { accessorKey: "Group", header: "Group" },
    { accessorKey: "Confirmed", header: "Confirmed" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "LockUnlock", header: "Lock / Unlock" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <div className="flex gap-4 2xl:flex-row">
        <DataTable
          columns={columns}
          data={usersTable}
          enableColumnFilter={true}
          filteredBy="UserID"
        />
        <div className="w-full justify-center 2xl:w-2/5">
          <div className="text-end my-4 mr-1">
            <Link href={"/admin/userAdmin/addUser"}>
              <Button type="button" className="">
                + Add New User
              </Button>
            </Link>
          </div>
          <UserDetails />
        </div>
      </div>
    </>
  );
};

export default Page;
