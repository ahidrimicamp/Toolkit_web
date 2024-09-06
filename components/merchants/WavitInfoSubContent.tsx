"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { wavitSettingsTable, wavitTransactionsTable } from "@/constants";
import { DataTypes } from "@/types";
import { Form } from "../ui/form";
import { CheckboxForm, DatePickerForm } from "../Shared/InstantForm";
import { Button } from "../ui/button";
import { newMerchantSchema } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Transactions = () => {
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

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DateTime", header: "ID" },
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "Invoice", header: "Invoice" },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "WAVit", header: "WAVit" },
    { accessorKey: "Total", header: "Total" },
    { accessorKey: "CC", header: "CC" },
    { accessorKey: "Last4", header: "Last 4" },
    { accessorKey: "NameOnCard", header: "Name on Card" },
    { accessorKey: "AuthCode", header: "Auth Code" },
    { accessorKey: "Tax", header: "Tax" },
    { accessorKey: "Tax2", header: "Tax" },
    { accessorKey: "Porcentage", header: "%" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="mt-4 gap-0">
              <div className="grid grid-cols-4 gap-2 max-2xl:grid-cols-2 max-lg:grid-cols-1">
                <div className="flex content-center justify-end gap-4">
                  <label className="w-1/3 content-center text-nowrap text-end text-sm font-medium">
                    From Date
                  </label>
                  <div className="flex-auto">
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/2024"
                    />
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="content-center justify-start text-nowrap">
                    <CheckboxForm
                      control={form.control}
                      formName="ChildMID"
                      label=""
                      placeholder=""
                    />
                  </div>
                  <span className="mt-1 content-center text-nowrap">
                    Look for Trouble
                  </span>
                </div>
                <div className="flex-1"></div>
                <Button className="my-2 flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                  Update
                </Button>
                <div className="flex content-center justify-end gap-4">
                  <label className="w-1/3 content-center text-nowrap text-end text-sm font-medium">
                    To Date
                  </label>
                  <div className="flex-auto">
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/2024"
                    />
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="content-center justify-start text-nowrap">
                    <CheckboxForm
                      control={form.control}
                      formName="BusinessRetail"
                      label=""
                      placeholder=""
                    />
                  </div>
                  <span className="mt-1 content-center text-nowrap">
                    Look for Debit Business (slow)
                  </span>
                </div>
                <div className="flex flex-1">
                  <div className="content-center justify-start text-nowrap">
                    <CheckboxForm
                      control={form.control}
                      formName="BusinessEcommerce"
                      label=""
                      placeholder=""
                    />
                  </div>
                  <span className="mt-1 content-center text-nowrap">
                    Save to c:\mcs_toolkit
                  </span>
                </div>
                <Button className="my-2 flex-1 bg-gradient-to-r from-[#828282] to-[#353535] text-white hover:opacity-90">
                  Export Table
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={wavitTransactionsTable}
          enableColumnFilter={true}
          filteredBy="Type"
        />
      </div>
    </section>
  );
};

const Settings = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Description", header: "Description" },
    { accessorKey: "Value", header: "Value" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <div className="my-5 grid w-1/2 grid-cols-1 overflow-auto max-xl:w-auto">
        <DataTable
          columns={columns}
          data={wavitSettingsTable}
          enableColumnFilter={false}
          actionsColumn={false}
        />
      </div>
    </section>
  );
};

export default function RenderWavitInfoTabComponents(value: string) {
  console.log(value);
  switch (value) {
    case "transactions":
      return <Transactions />;
    case "settings":
      return <Settings />;
  }
}
