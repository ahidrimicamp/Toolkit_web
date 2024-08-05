"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { adjustmentTable, agentEmailList,  ModelSelectList } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Form } from "../ui/form";
import { newAdjustmentCriteriaSchema, newRecentOrdersSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "../Shared/InstantForm";
import { equipmentData } from "@/constants";
import { Card } from "../ui/card";
import ThirdPartyProcessor from "./ThirdPartyProcessors";
import FirstDataOmaha from "./FirstDataOmaha";

const Calculate = () => {

  return (
    <>
      <section className="text-start flex gap-2 max-lg:flex-wrap">
        <ThirdPartyProcessor />
        <FirstDataOmaha />
      </section>
    </>
  )
}

const Adjustments = () => {

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

  const form = useForm<z.infer<typeof newAdjustmentCriteriaSchema>>({
    resolver: zodResolver(newAdjustmentCriteriaSchema),
    defaultValues: {
      ResidualDate: "",
      Agent: "",
      AgentID: "",
      AdjustType: "",
      MID: "",
      DBALegal: "",
      Processor: "",
      Amount: "",
      Notes: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newAdjustmentCriteriaSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className=" mt-4 text-start max-2xl:flex-wrap gap-2">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex max-2xl:flex-wrap gap-2">
            {/* ADJUSTMENT CRITERIA CARD */}
            <div className="flex-auto">
              <h1 className="text-center font-medium text-xl my-5">Adjustment Criteria</h1>

              <div className="m-auto flex w-full gap-4">
                <div className="w-1/3 content-center text-end mt-2">
                  <p className="">Residual Date</p>
                </div>
                <div className="content-center w-2/3 flex-auto">
                  <DatePickerForm
                    control={form.control}
                    formName="ResidualDate"
                    label=""
                    placeholder="mm/dd/2024"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4">
                <div className="w-1/3 content-center text-end mt-2">
                  <p className="">Agent</p>
                </div>
                <div className="w-2/3">
                  <SelectForm
                    control={form.control}
                    formName={"Agent"}
                    label=""
                    placeholder={"Select Agent"}
                    content={agentEmailList}
                    valueKey='Email'
                    displayKey='Name'
                    disabled={false}
                    className=""
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">Agent ID</p>
                <div className="flex gap-2 w-2/3">
                  <div className="flex-1">
                    <InputForm
                      control={form.control}
                      formName={"AgentID"}
                      label=""
                      placeholder=""
                    />
                  </div>
                  <Button className="flex-1 mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                    Search
                  </Button>
                </div>
              </div>

              <hr className="border my-7" />

              <div>
                <div className="m-auto flex w-full gap-4">
                  <div className="w-1/3 content-center text-end mt-2">
                    <p className="">Adjust Type</p>
                  </div>
                  <div className="w-2/3">
                    <SelectForm
                      control={form.control}
                      formName={"AdjustType"}
                      label=""
                      placeholder={"Select Adjust Type"}
                      content={agentEmailList}
                      valueKey='Email'
                      displayKey='Name'
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">MID</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"MID"}
                    label=""
                    placeholder="Enter MID"
                  />
                </div>
              </div>
              <div className="text-end m-auto w-full my-3">
                <Button className="px-8 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Find / Clear
                </Button>
              </div>
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">DBA/Legal</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"DBALegal"}
                    label=""
                    placeholder="Enter DBA/Legal"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">Processor</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Processor"}
                    label=""
                    placeholder="Enter Processor"
                  />
                </div>
              </div>


              <div className="m-auto mt-10 flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">Amount</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Amount"}
                    label=""
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">Notes</p>
                <div className="w-2/3">
                  <TextAreaForm
                    control={form.control}
                    formName={"Notes"}
                    label=""
                    placeholder="Notes..."
                  />
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <Button className="px-10 my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Edit
                </Button>
                <Button className="px-10 my-5 bg-gradient-to-r from-[#FF3333] to-[#8F0000] hover:opacity-90 text-white">
                  Delete
                </Button>
              </div>
            </div>

            <div className="flex-auto">
              <DataTable
                columns={columns}
                data={adjustmentTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="brand"
              />
            </div>

          </form>
        </Form>
      </section>
    </>
  )
}

const Reports = () => {
  const form = useForm<z.infer<typeof newRecentOrdersSchema>>({
    resolver: zodResolver(newRecentOrdersSchema),
    defaultValues: {
      FromDate: "",
      ToDate: ""
    },
  });

  const onSubmit = (value: z.infer<typeof newRecentOrdersSchema>) => {
    console.log(value);
  };

  const data = [
    {
      id: 1,
      title: "Date, Type",
      value: "DateType",
    },
    {
      id: 2,
      title: "Date, Type, Agent",
      value: "DateTypeAgent",
    },
    {
      id: 3,
      title: "Date",
      value: "Date",
    },
    {
      id: 4,
      title: "Agent",
      value: "SumAgent",
    },
    {
      id: 5,
      title: "Status",
      value: "Status",
    },
    {
      id: 6,
      title: "Process",
      value: "Process",
    },
    {
      id: 7,
      title: "Sales",
      value: "SalesReport",
    },
  ];

  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

    return <div className="text-right font-medium">{formatted}</div>;
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "brand", header: "Brand" },
    { accessorKey: "model", header: "Model" },
    { accessorKey: "purchaseDate", header: "Purchase" },
    { accessorKey: "warrantyExpiration", header: "Warranty Expiration" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "location", header: "Location" },
    { accessorKey: "assignedTo", header: "Assigned" },
    { accessorKey: "price", header: "Price", cell: Price },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="text-start gap-4 flex mt-5 overflow-x-auto max-2xl:grid-cols-1">
            <div className="w-full ">
              {/* CARD 1 - ORDER REPORTS */}
              <Card className="mt-4 p-4 space-y-4 shadow-md">
                <h1 className="text-xl font-medium">Order Reports</h1>
                <div className="flex gap-2 w-full">

                  <div className="flex flex-1 gap-2 content-center">
                    <label className="text-nowrap content-center font-medium mt-1">From Date</label>
                    <div className="content-center flex-auto">
                      <DatePickerForm
                        control={form.control}
                        formName="FromDate"
                        label=""
                        placeholder="mm/dd/2024"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 gap-2 content-center">
                    <label className="text-nowrap content-center font-medium mt-1">To Date</label>
                    <div className="content-center flex-auto">
                      <DatePickerForm
                        control={form.control}
                        formName="ToDate"
                        label=""
                        placeholder="mm/dd/2024"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-auto gap-2 content-center mt-2 text-end">
                  <Button className="flex-1 bg-gradient-to-r from-[#FF3333] to-[#8F0000] hover:opacity-90 text-white">
                    Reset
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                    Submit
                  </Button>
                </div>
              </Card>

              {/* CARD 2 - INVENTORY BY ITEM */}
              <Card className="mt-4 p-4 space-y-4 shadow-md">
                <h1 className="text-xl font-medium">Inventory By Item</h1>

                <div className="flex gap-2 w-full">

                  <div className="m-auto w-full flex gap-4">
                    <div className="w-1/5 content-center text-end mt-2">
                      <p className="">Model</p>
                    </div>
                    <div className="w-full">
                      <SelectForm
                        control={form.control}
                        formName="Model"
                        label=""
                        placeholder="Select a model..."
                        content={ModelSelectList}
                        valueKey='id'
                        displayKey='title'
                        disabled={false}
                        className=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-auto gap-2 content-center mt-2 text-end">
                  <Button className="flex-1 bg-gradient-to-r from-[#FF3333] to-[#8F0000] hover:opacity-90 text-white">
                    Reset
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                    Submit
                  </Button>
                </div>
              </Card>

              {/* CARD 2 - OTHERS */}
              <Card className="mt-4 p-4 space-y-2 shadow-md">
                <h1 className="text-xl font-medium">Others</h1>

                <Button className="w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Master Equipment List
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Inventory Summary
                </Button>
              </Card>
            </div>



            <DataTable
              columns={columns}
              data={equipmentData}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="brand"
            />
          </div>
        </form>
      </Form>
    </>
  )
}

const DisplayResiduals = () => {

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

  const form = useForm<z.infer<typeof newAdjustmentCriteriaSchema>>({
    resolver: zodResolver(newAdjustmentCriteriaSchema),
    defaultValues: {
      ResidualDate: "",
      Agent: "",
      AgentID: "",
      AdjustType: "",
      MID: "",
      DBALegal: "",
      Processor: "",
      Amount: "",
      Notes: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newAdjustmentCriteriaSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className=" mt-4 text-start max-2xl:flex-wrap gap-2">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex max-2xl:flex-wrap gap-2">
            {/* ADJUSTMENT CRITERIA CARD */}
            <div className="flex-auto">
              <h1 className="text-center font-medium text-xl my-5">Adjustment Criteria</h1>

              <div className="m-auto flex w-full gap-4">
                <div className="w-1/3 content-center text-end mt-2">
                  <p className="">Residual Date</p>
                </div>
                <div className="content-center w-2/3 flex-auto">
                  <DatePickerForm
                    control={form.control}
                    formName="ResidualDate"
                    label=""
                    placeholder="mm/dd/2024"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4">
                <div className="w-1/3 content-center text-end mt-2">
                  <p className="">Agent</p>
                </div>
                <div className="w-2/3">
                  <SelectForm
                    control={form.control}
                    formName={"Agent"}
                    label=""
                    placeholder={"Select Agent"}
                    content={agentEmailList}
                    valueKey='Email'
                    displayKey='Name'
                    disabled={false}
                    className=""
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">Agent ID</p>
                <div className="flex gap-2 w-2/3">
                  <div className="flex-1">
                    <InputForm
                      control={form.control}
                      formName={"AgentID"}
                      label=""
                      placeholder=""
                    />
                  </div>
                  <Button className="flex-1 mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                    Search
                  </Button>
                </div>
              </div>

              <hr className="border my-7" />

              <div>
                <div className="m-auto flex w-full gap-4">
                  <div className="w-1/3 content-center text-end mt-2">
                    <p className="">Adjust Type</p>
                  </div>
                  <div className="w-2/3">
                    <SelectForm
                      control={form.control}
                      formName={"AdjustType"}
                      label=""
                      placeholder={"Select Adjust Type"}
                      content={agentEmailList}
                      valueKey='Email'
                      displayKey='Name'
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">MID</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"MID"}
                    label=""
                    placeholder="Enter MID"
                  />
                </div>
              </div>
              <div className="text-end m-auto w-full my-3">
                <Button className="px-8 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Find / Clear
                </Button>
              </div>
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">DBA/Legal</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"DBALegal"}
                    label=""
                    placeholder="Enter DBA/Legal"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">Processor</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Processor"}
                    label=""
                    placeholder="Enter Processor"
                  />
                </div>
              </div>


              <div className="m-auto mt-10 flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">Amount</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Amount"}
                    label=""
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">Notes</p>
                <div className="w-2/3">
                  <TextAreaForm
                    control={form.control}
                    formName={"Notes"}
                    label=""
                    placeholder="Notes..."
                  />
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <Button className="px-10 my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Edit
                </Button>
                <Button className="px-10 my-5 bg-gradient-to-r from-[#FF3333] to-[#8F0000] hover:opacity-90 text-white">
                  Delete
                </Button>
              </div>
            </div>

            <div className="flex-auto">
              <DataTable
                columns={columns}
                data={adjustmentTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="brand"
              />
            </div>

          </form>
        </Form>
      </section>
    </>
  )
}

export default function RenderResidualsComponents(value: string) {
  switch (value) {

    case "calculate":
      return <Calculate />;
    case "adjustments":
      return <Adjustments />;
    case "reports":
      return <Reports />;
    case "displayResiduals":
      return <DisplayResiduals />;
  }
}
