"use client";

import React from "react";
import { usersTable } from "@/constants";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "@/components/Shared/DataTable/DataTable";
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
    <section>
      <h1 className="mt-3 text-center text-2xl font-semibold text-sky-500">
        User Admin Management
      </h1>
      <p className="text-center text-base text-gray-500">
        Select a user to edit or add a new one.
      </p>
      <div className="flex gap-4 max-2xl:flex-wrap">
        <div className="grid flex-auto grid-cols-1 overflow-auto px-2">
          <h2 className="mt-2 text-center text-xl">List of users:</h2>
          <DataTable
            columns={columns}
            data={usersTable}
            enableColumnFilter={true} 
            filteredBy="Name"
          />
        </div>
        <div className="mt-8 flex-auto justify-center 2xl:w-2/5">
          <div className="my-4 mr-1 flex justify-end gap-2">
            <Link href={"/admin/userAdmin/addUser"}>
              <Button type="button" className="">
                + Add New Agent
              </Button>
            </Link>
            <Link href={"/admin/userAdmin/addUser"}>
              <Button type="button" className="">
                + Add New User
              </Button>
            </Link>
          </div>
          <UserDetails />
        </div>
      </div>
    </section>
  );
};

export default Page;
