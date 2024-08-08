/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { newMerchantSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { SelectForm } from "@/components/Shared/InstantForm";
import {
  equipmentTable1,
  equipmentTable2,
  equipmentTable3,
  equipmentList1,
} from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";

const page = () => {

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

  const onSubmit = (value: z.infer<typeof newMerchantSchema>) => {
    console.log(value);
  };
  /* COSTUMIZATION OF THE COLUMN PRICE */
  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
    return <div className="text-right font-medium">{formatted}</div>;
  };

  const columnsConfig1: ColumnConfig<DataTypes>[] = [
    { accessorKey: "StartDate", header: "Start Date" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "$Cost", header: "$ Cost", cell: Price },
    { accessorKey: "$Pay", header: "$ Pay", cell: Price },
  ];
  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Model" },
    { accessorKey: "SerialNumber", header: "Serial Number" },
    { accessorKey: "Condition", header: "Condition" },
    { accessorKey: "$Orig", header: "$ Orig", cell: Price },
    { accessorKey: "$Sale", header: "$ Sale", cell: Price },
  ];
  const columnsConfig3: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Method", header: "Method" },
    { accessorKey: "InitialDate", header: "Initial Date" },
    { accessorKey: "AmountDue", header: "Amount Due", cell: Price },
    { accessorKey: "AmountPaid", header: "Amount Paid", cell: Price },
    { accessorKey: "Split", header: "Split", cell: Price },
    { accessorKey: "Note", header: "Note" },
  ];
  const columns1 = createColumns(columnsConfig1);
  const columns2 = createColumns(columnsConfig2);
  const columns3 = createColumns(columnsConfig3);

  return (
    <>
      <section>
        <h1 className="mb-3 text-2xl text-sky-500">Equipment</h1>

        <div className="flex gap-4 max-lg:flex-wrap">
          {/* FIRST COLUMN */}
          <div className="mb-5 grid grid-cols-1 overflow-auto flex-auto rounded-md">
            <DataTable
              columns={columns1}
              data={equipmentTable1}
              enableColumnFilter={true}
              filteredBy="Status"
            />
          </div>
          {/* SECOND COLUMN */}
          <div className="mb-5 min-h-96 w-fit flex-auto rounded-md">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Activity Row */}
                <div className="flex max-lg:flex-wrap gap-2">
                  <Button className="flex-auto self-end bg-gradient-to-r from-[#C05353] to-[#8F0000] p-1 text-white hover:opacity-90">
                    Delete Order
                  </Button>
                  <Button className="flex-auto self-end bg-gradient-to-r from-[#14ADD6] to-[#384295] p-1 text-white hover:opacity-90">
                    Edit Order
                  </Button>
                  <div className="flex-auto self-end">
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label="Return Equipment"
                      content={equipmentList1}
                      placeholder="Select a status.."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=""
                    />
                  </div>
                  <div className="ml-4 mt-8 flex items-center gap-2">
                    <Checkbox />
                    <span className="text-nowrap text-sm">Show history</span>
                  </div>
                  <div className="ml-4 mt-8 flex items-center gap-2">
                    <Checkbox />
                    <span className="text-nowrap text-sm">
                      Return to Inventory
                    </span>
                  </div>
                </div>
                <div className="mb-5 grid grid-cols-1 overflow-auto flex-auto rounded-md  ">
                  <DataTable
                    columns={columns2}
                    data={equipmentTable2}
                    enableColumnFilter={true}
                    filteredBy="Model"
                  />
                </div>
                <div className="flex justify-around gap-2">
                  <Button className="bg-gradient-to-r from-[#A4A4A4] to-[#353535] text-white hover:opacity-90">
                    Copy Serial # to Clipboard
                  </Button>
                  <Button className="bg-gradient-to-r from-[#A4A4A4] to-[#353535] text-white hover:opacity-90">
                    Return Label
                  </Button>
                  <Button className="bg-gradient-to-r from-[#A4A4A4] to-[#353535] text-white hover:opacity-90">
                    Send Email
                  </Button>
                </div>
                <div className="mb-5 grid grid-cols-1 overflow-auto flex-auto rounded-md  ">
                  <DataTable
                    columns={columns3}
                    data={equipmentTable3}
                    enableColumnFilter={true}
                    filteredBy="Method"
                  />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
