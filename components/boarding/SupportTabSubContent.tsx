"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { adjustmentTable, mySolvedTicketsTable, myTicketsTable } from "@/constants";
import { DataTypes } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import NewMerchant from "../merchants/NewMerchant";
import NewSupportTicket from "./NewSupportTicket";


const MyTickets = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Subject", header: "Subject" },
    { accessorKey: "UpdatedAt", header: "Updated At" },
    { accessorKey: "Assignee", header: "Assignee" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section className=" mt-4 text-start max-2xl:flex-wrap gap-2">
        <div className="flex justify-between gap-2 items-center mt-10">
          <h1 className="text-center font-medium text-sky-500 text-xl ">My Tickets</h1>
          <Dialog>
            <DialogTrigger>
              <Button variant={"submit"}>+ New Ticket</Button>
            </DialogTrigger>
            <DialogContent className="2xl:[800px] max-lg:max-w-[500px] lg:max-w-[800px]">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center mb-5 text-sky-500 font-semibold">
                  Add New Support Ticket
                </DialogTitle>
                <NewSupportTicket />
              </DialogHeader>
            </DialogContent>
          </Dialog>

        </div>
        <div className="grid grid-cols-1 overflow-auto">
          <DataTable
            columns={columns}
            data={myTicketsTable}
            enableSorting={true}
            enableColumnFilter={true}
            filteredBy="brand"
          />
        </div>
      </section>
    </>
  )
}

const Solved = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Subject", header: "Subject" },
    { accessorKey: "UpdatedAt", header: "Updated At" },
    { accessorKey: "Assignee", header: "Assignee" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section className=" mt-4 text-start max-2xl:flex-wrap gap-2">
        <div className="flex justify-between gap-2 items-center mt-10">
          <h1 className="text-center font-medium text-sky-500 text-xl ">Solved Tickets</h1>
          <Dialog>
            <DialogTrigger>
              <Button variant={"submit"}>+ New Ticket</Button>
            </DialogTrigger>
            <DialogContent className="2xl:[300px] max-lg:max-w-[300px] lg:max-w-[300px]">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center mb-5 text-sky-500 font-semibold">
                  Add New Support Ticket
                </DialogTitle>
                <NewSupportTicket />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 overflow-auto">
          <DataTable
            columns={columns}
            data={mySolvedTicketsTable}
            enableSorting={true}
            enableColumnFilter={true}
            filteredBy="brand"
          />
        </div>
      </section>
    </>
  )
}



export default function RenderSupportTabComponents(value: string) {
  switch (value) {

    case "myTickets":
      return <MyTickets />;
    case "solved":
      return <Solved />;
  }
}
