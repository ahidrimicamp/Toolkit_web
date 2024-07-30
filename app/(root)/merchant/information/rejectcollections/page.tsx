/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { newMerchantSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { rejectCollectionsTable1, rejectCollectionsTable2 } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { Badge } from "@/components/ui/badge";

const page = () => {
  // eslint-disable-next-line no-unused-vars
  const form = useForm<z.infer<typeof newMerchantSchema>>({
    resolver: zodResolver(newMerchantSchema),
    defaultValues: {
      MID: "",
      LegalName: "",
      DBA: "",
      Phone: "",
      Status: "",
      Approval: "",
      Filter: "",
      Processor: "",
      Fitler2: "",
      AgentID: 0,
      SalesRep: "",
      Split: 0,
      SplitName: "",
      SplitID: 0,
      LeadSource: "",
      SplitLead: 0,
      EstAnnual: 0,
      Transactions: 0,
      Filter3: "",
      Banks: "",
      WAVItAccount: 0,
      MCCCode: "",
      Notice: "",
      ChildMID: false,
      WAVitAccount: false,
      WAVitApp: false,
      NewAccountTasks: false,
      BusinessRetail: false,
      BusinessEcommerce: false,
      BusinessRestaurant: false,
      BusinessMoTo: false,
      DeployBy: "",
    },
  });

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (value: z.infer<typeof newMerchantSchema>) => {
    console.log(value);
  };

  //  COSTUMIZATION OF THE COLUMN PRICE
  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
    return <div className="text-center font-medium">{formatted}</div>;
  };
  const Status = (row: any) => {
    const statusValue = row.getValue("price");
    statusValue.toString();
    if (statusValue.toLowerCase() === "paid") {
      return (
        <Badge variant="success" className="text-center">
          {statusValue}
        </Badge>
      );
    } else if (statusValue.toLowerCase() === "cancelled") {
      return (
        <Badge variant="default" className="text-center">
          {statusValue}
        </Badge>
      );
    } else {
      return (
        <Badge variant="destructive" className="text-center">
          {statusValue}
        </Badge>
      );
    }
  };
  const columnsConfig1: ColumnConfig<DataTypes>[] = [
    { accessorKey: "SuspenseDate", header: "Suspense Date" },
    { accessorKey: "CreateDate", header: "Create Date" },
    { accessorKey: "DebitAmount", header: "Debit Amount", cell: Price },
    { accessorKey: "CreditAmount", header: "Credit Amount", cell: Price },
    { accessorKey: "RejectCode", header: "Reject Code" },
    { accessorKey: "FollowupDate", header: "Followup Date" },
    { accessorKey: "ResponseDescription", header: "Response Description" },
  ];

  const columns1 = createColumns(columnsConfig1);

  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "RefDate", header: "Ref Date" },
    { accessorKey: "InitDate", header: "Init Date" },
    { accessorKey: "ToCollect", header: "To Collect" },
    { accessorKey: "Payments", header: "Payments" },
    { accessorKey: "Status", header: "Status", cell: Status },
    { accessorKey: "NextDate", header: "Next Date" },
    { accessorKey: "NextTaks", header: "Next Task" },
  ];

  const columns2 = createColumns(columnsConfig2);

  return (
    <>
      <section className="w-full">
        <h1 className="mb-3 text-2xl text-sky-500">Reject / Collections</h1>


        <div className='w-full flex-1 rounded-md min-h-96 mb-5'>
          <DataTable
            columns={columns1}
            data={rejectCollectionsTable1}
            enableColumnFilter={true}
            filteredBy="username"
          />
        </div>

        <div className='flex max-md:flex-wrap gap-2'>
          <div className='w-full flex-auto rounded-md min-h-96 mb-5'>
            <DataTable
              columns={columns2}
              data={rejectCollectionsTable2}
              enableColumnFilter={true}
              filteredBy="username"
            />
          </div>
          <div className="w-2/12">
            <Button className="mb-2 w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
              Create New Collection
            </Button>
            <Button className="mb-2 w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
              Edit Collection
            </Button>
            <hr className="my-5 border-transparent bg-transparent" />
            <Button className="mb-2 w-full bg-gradient-to-r from-[#79CB6C] to-[#285C20] px-10 text-white hover:opacity-90">
              Add Payment
            </Button>
            <Button className="mb-2 w-full bg-gradient-to-r from-[#FF3333] to-[#8F0000] px-10 text-white hover:opacity-90">
              Desactivate Collection
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
