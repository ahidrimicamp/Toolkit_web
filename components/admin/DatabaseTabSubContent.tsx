"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {  auditDetailsTable, auditTypeSelectList, usersTable } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Form } from "../ui/form";
import { newAuditDetailSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  DatePickerForm,
  SelectForm,
} from "../Shared/InstantForm";


const Users = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Roles", header: "Roles" },
    { accessorKey: "Group", header: "Group" },
    { accessorKey: "Confirmed", header: "Confirmed" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "LockUnlock", header: "Lock/Unlock" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section className="text-start w-full">

        <Button className="px-10 font-light mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
          New User
        </Button>

        <DataTable
          columns={columns}
          data={usersTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="brand"
        />
      </section>
    </>
  )
}

const Audit = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "AuditId", header: "Audit ID" },
    { accessorKey: "AuditType", header: "AuditType" },
    { accessorKey: "ItemId", header: "ItemId" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "UserName", header: "Username" },
    { accessorKey: "TextAuditDescription", header: "Audit Description" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newAuditDetailSchema>>({
    resolver: zodResolver(newAuditDetailSchema),
    defaultValues: {
      AuditType: "",
      EntryDate: "",
      ToDate: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newAuditDetailSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className=" mt-4 text-start  gap-2">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" gap-2">
            
          <h1 className="text-center font-medium text-xl my-5">Audit Detail</h1>
            {/* AUDIT DETAIL FIND */}
            <div className="w-2/6">

              <div className="m-auto flex w-full gap-4">
                <div className="w-1/3 content-center text-end mt-2">
                  <p className="">Audit Type</p>
                </div>
                <div className="w-2/3">
                  <SelectForm
                    control={form.control}
                    formName={"AuditType"}
                    label=""
                    placeholder={"Select Audit Type"}
                    content={auditTypeSelectList}
                    valueKey='value'
                    displayKey='title'
                    disabled={false}
                    className=""
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4">
                <div className="w-1/3 content-center text-end mt-2">
                  <p className="">Entry Date</p>
                </div>
                <div className="content-center w-2/3 flex-auto">
                  <DatePickerForm
                    control={form.control}
                    formName="EntryDate"
                    label=""
                    placeholder="mm/dd/2024"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4">
                <div className="w-1/3 content-center text-end mt-2">
                  <p className="">To Date</p>
                </div>
                <div className="content-center w-2/3 flex-auto">
                  <DatePickerForm
                    control={form.control}
                    formName="ToDate"
                    label=""
                    placeholder="mm/dd/2024"
                  />
                </div>
              </div>
              <div className="text-end">
                <Button className="px-10 font-light mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Find
                </Button>
              </div>
            </div>

            <DataTable
              columns={columns}
              data={auditDetailsTable}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="brand"
            />

          </form>
        </Form>
      </section>
    </>
  )
}

export default function RenderDatabaseComponents(value: string) {
  switch (value) {

    case "users":
      return <Users />;
    case "audit":
      return <Audit />;

  }
}
