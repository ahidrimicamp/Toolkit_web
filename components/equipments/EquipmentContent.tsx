"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { itemsForm } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Form } from "../ui/form";
import { newItemsSchema, newLookupSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  InputForm,
  SelectForm,
} from "../Shared/InstantForm";
import { equipmentData, lookupForm, LookupTable } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EquipmentReportForm from "@/components/equipments/EquipmentReportForm";
import LookupSubSection from "./LookupSubSection";

const Lookup = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Model" },
    { accessorKey: "Condition", header: "Condition" },
    { accessorKey: "Serial", header: "Serial #" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Del", header: "Del." },
    { accessorKey: "Date", header: "Date" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newLookupSchema>>({
    resolver: zodResolver(newLookupSchema),
    defaultValues: {
      MID: "",
      OrderID: "",
      Serial: "",
      Model: "",
      Condition: "",
      ShelfItems: false,
    },
  });

  const onSubmit = (value: z.infer<typeof newLookupSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Processor Information */}
            <h1 className="m-auto text-center text-xl font-bold">
              Lookup
            </h1>

            <div className="grid grid-flow-col grid-rows-3 max-lg:grid-flow-row  gap-2">
              {lookupForm.map((item) =>
                item.content ? (
                  <>
                    <div key={item.id} className="m-auto flex w-3/4 gap-4">
                      <div className="w-1/3 content-center text-end mt-2">
                        <p className="">{item.title}</p>
                      </div>
                      <div className="w-full">
                        <SelectForm
                          control={form.control}
                          formName={item.formName}
                          label=""
                          placeholder={item.placeholder}
                          content={item.content}
                          valueKey='id'
                          displayKey='title'
                          disabled={false}
                          className=""
                        />
                      </div>
                    </div>
                  </>
                ) : item.type == 'checkbox' ? (
                  <>
                    <div key={item.id} className="m-auto flex w-3/4 gap-4">
                      <div className="w-1/3 content-center text-end">
                        <p className=""></p>
                      </div>
                      <div className="w-full">
                        <CheckboxForm
                          control={form.control}
                          formName={item.formName}
                          label=""
                          placeholder={item.title}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div key={item.id} className="m-auto flex w-3/4 gap-4">
                      <div className="w-1/3 content-center text-end">
                        <p className="">{item.title}</p>
                      </div>
                      <div className="w-2/3">
                        <InputForm
                          control={form.control}
                          formName={item.formName}
                          label=""
                          placeholder={item.placeholder}
                        />
                      </div>
                    </div>
                  </>
                ),
              )}
            </div>

            <div className="text-center">
              <Button className="px-10 my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                SUBMIT
              </Button>
            </div>

            <div className="w-full">
              <DataTable
                columns={columns}
                data={LookupTable}
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

const Items = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Model" },
    { accessorKey: "Condition", header: "Condition" },
    { accessorKey: "Serial", header: "Serial #" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Del", header: "Del." },
    { accessorKey: "Date", header: "Date" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newItemsSchema>>({
    resolver: zodResolver(newItemsSchema),
    defaultValues: {
      Model: "",
      Id: "",
      Description: "",
      Alias: "",
      ItemType: "",
      Style: "",
      Manufacturer: "",
      ReorderQty: 0,
      SerialNumber: false,
      TakeInventory: false,
      PhysicallyShippable: false,
      HwPricing: 0,
      DeployFee: 0,
      TaxShipping: 0,
      Total: 0,
      DimensionName: "",
      DimensionWidth: "",
      DimensionHeight: "",
      DimensionLength: "",
      DimensionWeight: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newItemsSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="flex max-2xl:flex-wrap gap-2">
        <div className="flex-1 p-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              {/* Items Form */}
              <div className="max-lg:grid-flow-row space-y-1">
                {itemsForm.map((item) =>
                  item.content ? (
                    <>
                      <div key={item.id} className="m-auto flex w-3/4 gap-4">
                        <div className="w-1/3 content-center text-end mt-2">
                          <p className="">{item.title}</p>
                        </div>
                        <div className="w-full">
                          <SelectForm
                            control={form.control}
                            formName={item.formName}
                            label=""
                            placeholder={item.placeholder}
                            content={item.content}
                            valueKey='id'
                            displayKey='title'
                            disabled={false}
                            className=""
                          />
                        </div>
                      </div>
                    </>
                  ) : item.type == 'checkbox' ? (
                    <>
                      <div key={item.id} className="m-auto flex w-3/4 gap-4">
                        <div className="w-1/3 content-center text-end">
                          <p className=""></p>
                        </div>
                        <div className="w-full">
                          <CheckboxForm
                            control={form.control}
                            formName={item.formName}
                            label=""
                            placeholder={item.title}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                      <>
                        <div key={item.id} className="m-auto flex w-3/4 gap-4">
                          <div className="w-1/3 content-center text-end">
                            <p className="">{item.title}</p>
                          </div>
                          <div className="w-2/3">
                            <InputForm
                              control={form.control}
                              formName={item.formName}
                              label=""
                              placeholder={item.placeholder}
                            />
                          </div>
                        </div>
                      </>
                    )
                )}
                <div className="flex flex-auto w-full">
                  <div className="m-auto mt-2 flex  gap-4">
                    <InputForm
                      control={form.control}
                      formName={"HwPricing"}
                      label={"Hardware Pricing"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"DeployFee"}
                      label={"Deploy Fee"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"TaxShipping"}
                      label={"Tax and Shipping"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"Total"}
                      label={"Total"}
                      placeholder={"$"}
                    />
                  </div>
                </div>
                <div className="flex w-ful">
                  <div key={11} className="m-auto mt-2 flex flex-1 gap-4">
                    <div className="grow w-2/4">
                      <InputForm
                        control={form.control}
                        formName={"DimensionName"}
                        label={"Dimension Name"}
                        placeholder={"Name"}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <InputForm
                        control={form.control}
                        formName={"DimensionLength"}
                        label={"Dimension Length"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionWidth"}
                        label={"Dimension Width"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionHeight"}
                        label={"Dimension Height"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionWeight"}
                        label={"Dimension Weight"}
                        placeholder={""}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <Button className="px-10 my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Add New
                </Button>
                <Button className="px-10 my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Copy
                </Button>
                <Button className="px-10 my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Save
                </Button>
              </div>


            </form>
          </Form>
        </div>
        <div className="flex-1">
          <LookupSubSection />
        </div>
      </section>
    </>
  )
}

const Reports = () => {


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
      <div className="grid grid-cols-2 mt-5 overflow-auto  max-2xl:grid-cols-1">
        <Tabs defaultValue="DateType" className="size-full">
          <TabsList>
            {data.map((tab) => (
              <TabsTrigger value={tab.value} key={tab.id}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {data.map((tab) => (
            <TabsContent value={tab.value} key={tab.id}>
              <EquipmentReportForm type={tab.value} />
            </TabsContent>
          ))}
        </Tabs>
        <DataTable
          columns={columns}
          data={equipmentData}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="brand"
        />
      </div>
    </>
  )
}

export default function RenderEquipmentComponents(value: string) {
  switch (value) {

    case "lookup":
      return <Lookup />;
    case "items":
      return <Items />;
    case "reports":
      return <Reports />;
  }
}
