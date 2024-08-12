"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { adjustmentTable, agentEmailList, displayResidualsTable, merchResidualPaymentsTable, ModelSelectList } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Form } from "../ui/form";
import { newAdjustmentCriteriaSchema, newDisplayResidualsSchema, newRecentOrdersSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "../Shared/InstantForm";
import { equipmentData } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const RawData = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Agent", header: "Agent" },
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section className="text-start  gap-2">
        <div className="grid grid-cols-1 overflow-auto">
          <DataTable
            columns={columns}
            data={adjustmentTable}
            enableSorting={true}
            enableColumnFilter={true}
            filteredBy="brand"
          />
        </div>
      </section>
    </>
  )
}

const RawRefunds = () => {

  return (
    <>
      <section className=" mt-4 text-start max-2xl:flex-wrap gap-2">


      </section>
    </>
  )
}

const ResidualPayments = () => {

  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

    return <div className="text-start font-medium">{formatted}</div>;
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DataMonth", header: "Data Month" },
    { accessorKey: "PayMonth", header: "Pay Month" },
    { accessorKey: "Vol", header: "$ Vol", cell: Price },
    { accessorKey: "Trans", header: "# Trans" },
    { accessorKey: "Rev", header: "$ Rev", cell: Price },
    { accessorKey: "Exp", header: "$ Exp", cell: Price },
    { accessorKey: "NetInc", header: "$ Net Inc", cell: Price },
    { accessorKey: "Split", header: "Split %" },
    { accessorKey: "Adj", header: "Adj" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section className="text-start">

        <div className="grid grid-cols-1 mt-5 overflow-auto">
          <DataTable
            columns={columns}
            data={merchResidualPaymentsTable}
            enableSorting={true}
            enableColumnFilter={true}
            filteredBy="DataMonth"
          />
        </div>
      </section>
    </>
  )
}

const AccountAnalysis = () => {


  return (
    <>
      <section className=" mt-4 text-start  gap-2">

      </section>
    </>
  )
}

const EnterAdjustments = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "AgentName", header: "Agent Name" },
    { accessorKey: "Pay", header: "Pay" },
    { accessorKey: "Send", header: "Send" },
    { accessorKey: "Day", header: "Day" },
    { accessorKey: "Phys", header: "Phys" },
    { accessorKey: "Group", header: "Group" },
    { accessorKey: "RoutingNo", header: "Routing No." },
    { accessorKey: "AccountNo", header: "Account No." },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "RptType", header: "RPT Type" },
    { accessorKey: "EmailList", header: "Email List" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newDisplayResidualsSchema>>({
    resolver: zodResolver(newDisplayResidualsSchema),
    defaultValues: {
      ResidualDate: "",
      PayDay: false,
      ExcludePayDay: false,
      PayGroup: false,
      ExcludePayGroup: false,
      ShowOkToPay: false,
      ExcludeNotOkToPay: false,
      ShowNotOkToPay: false,
      OnlyWithEmails: false,
      OnlyMissingEmails: false,
      ResidualsReportsOptIn: false,
      OnlyWithBankingInfo: false,
      OnlyMissingBankingInfo: false,
      OnlyShowPositiveResiduals: false,
      OnlyShowZeroNegativeResiduals: false,
      OnlyShowPhysicalChecks: false,
      EmailReportsToAgent: false,
      EmailReportsToUser: false,
      EmailReportsToWho: false,
    },
  });

  const onSubmit = (value: z.infer<typeof newDisplayResidualsSchema>) => {
    console.log(value);
  };

  const FrontEndPlatformData = [
    { id: 1, name: "Buypass", value: "buypass" },
    { id: 2, name: "Nashville", value: "nashville" },
    { id: 3, name: "North", value: "north" },
    { id: 4, name: "None", value: "none" },
  ];

  return (
    <>
      <section className="flex max-xl:flex-wrap mt-5 text-start gap-2">


        <div className="flex-1 grid grid-cols-1 overflow-auto  ">
          <DataTable
            columns={columns}
            data={displayResidualsTable}
            enableSorting={true}
            enableColumnFilter={true}
            filteredBy="brand"
          />
        </div>
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-3/4 m-auto">

              <SelectForm
                control={form.control}
                formName="FrontEndPlatform"
                label="Agent"
                content={FrontEndPlatformData}
                placeholder="Select an Agent"
                valueKey="id"
                displayKey="name"
                disabled={false}
                className=""
              />
              <DatePickerForm
                control={form.control}
                formName="Approval"
                label="Data Date"
                placeholder="Pick a date"
              />
              <DatePickerForm
                control={form.control}
                formName="Approval"
                label="Display Date"
                placeholder="Pick a date"
              />
              <SelectForm
                control={form.control}
                formName="FrontEndPlatform"
                label="Adjust Type"
                content={FrontEndPlatformData}
                placeholder="Select Adjust Type"
                valueKey="id"
                displayKey="name"
                disabled={false}
                className=""
              />
              <TextAreaForm
                control={form.control}
                formName="FrontEndMID"
                label="Notes"
                placeholder="List here"
              />
              <InputForm
                control={form.control}
                formName="CheckServiceMID"
                label="Adjust Amount"
                placeholder=""
              />
              <div className="w-1/3">
                <InputForm
                  control={form.control}
                  formName="CheckServiceMID"
                  label="Split %"
                  placeholder=""
                />
              </div>
              <Button className="bg-blue-500">Enter Adjustment</Button>
            </form>
          </Form>
        </div>
      </section>
    </>
  )
}

const CalculateResiduals = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "AgentName", header: "Agent Name" },
    { accessorKey: "Pay", header: "Pay" },
    { accessorKey: "Send", header: "Send" },
    { accessorKey: "Day", header: "Day" },
    { accessorKey: "Phys", header: "Phys" },
    { accessorKey: "Group", header: "Group" },
    { accessorKey: "RoutingNo", header: "Routing No." },
    { accessorKey: "AccountNo", header: "Account No." },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "RptType", header: "RPT Type" },
    { accessorKey: "EmailList", header: "Email List" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newDisplayResidualsSchema>>({
    resolver: zodResolver(newDisplayResidualsSchema),
    defaultValues: {
      ResidualDate: "",
      PayDay: false,
      ExcludePayDay: false,
      PayGroup: false,
      ExcludePayGroup: false,
      ShowOkToPay: false,
      ExcludeNotOkToPay: false,
      ShowNotOkToPay: false,
      OnlyWithEmails: false,
      OnlyMissingEmails: false,
      ResidualsReportsOptIn: false,
      OnlyWithBankingInfo: false,
      OnlyMissingBankingInfo: false,
      OnlyShowPositiveResiduals: false,
      OnlyShowZeroNegativeResiduals: false,
      OnlyShowPhysicalChecks: false,
      EmailReportsToAgent: false,
      EmailReportsToUser: false,
      EmailReportsToWho: false,
    },
  });

  const onSubmit = (value: z.infer<typeof newDisplayResidualsSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className=" mt-4 text-start  gap-2">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" gap-2">

          </form>
        </Form>
        <div className="grid grid-cols-1 overflow-auto  ">
          <DataTable
            columns={columns}
            data={displayResidualsTable}
            enableSorting={true}
            enableColumnFilter={true}
            filteredBy="brand"
          />
        </div>
      </section>
    </>
  )
}
export default function RenderMerchResidualsComponents(value: string) {
  switch (value) {

    case "rawData":
      return <RawData />;
    case "rawRefunds":
      return <RawRefunds />;
    case "residualPayments":
      return <ResidualPayments />;
    case "accountAnalysis":
      return <AccountAnalysis />;
    case "enterAdjustments":
      return <EnterAdjustments />;
    case "calculateResiduals":
      return <CalculateResiduals />;
  }
}
