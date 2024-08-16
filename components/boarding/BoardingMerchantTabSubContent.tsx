"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { fspLeadsTable, northLeadsTable } from "@/constants";
import { DataTypes } from "@/types";
import { Form } from "../ui/form";
import {
  boardingMerchantInfoSchema,
  newFspLeadSchema,
  newNorthBlindLeadSchema,
} from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputForm } from "../Shared/InstantForm";

const MerchantInformation = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Status", header: "Status" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof boardingMerchantInfoSchema>>({
    resolver: zodResolver(boardingMerchantInfoSchema),
    defaultValues: {
      MID: "",
      LegalName: "",
      ContactName: "",
      Address: "",
      SteApt: "",
      City: "",
      State: "",
      Zip: "",
      phone1: "",
      Ext1: "",
      Phone2: "",
      Ext2: "",
      Email: "",
      DbaLegalName: "",
      DbaContactName: "",
      DbaAddress: "",
      DbaSteApt: "",
      DbaCity: "",
      DbaState: "",
      DbaZip: "",
    },
  });

  const onSubmit = (value: z.infer<typeof boardingMerchantInfoSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <h1 className="mt-10 text-xl font-medium text-sky-500">
              Merchant Details
            </h1>
            <div className="my-5 grid grid-cols-2 gap-2">
              <InputForm
                control={form.control}
                formName="MID"
                label="MID:"
                placeholder="123456789"
              />
              <div></div>
              <InputForm
                control={form.control}
                formName="LegalName"
                label="Legal Name:"
                placeholder="Legal Name"
              />
              <InputForm
                control={form.control}
                formName="ContactName"
                label="Contact Name:"
                placeholder="Insert a contact name"
              />
              <InputForm
                control={form.control}
                formName="Address"
                label="Address:"
                placeholder="Insert the Address"
              />
              <InputForm
                control={form.control}
                formName="SteApt"
                label="Ste. / Apt.:"
                placeholder=""
              />
              <div className="flex gap-2">
                <div className="flex-1">
                  <InputForm
                    control={form.control}
                    formName="City"
                    label="City:"
                    placeholder="Scottsdale"
                  />
                </div>
                <InputForm
                  control={form.control}
                  formName="State"
                  label="State:"
                  placeholder="AZ"
                />
                <InputForm
                  control={form.control}
                  formName="Zip"
                  label="Postal Code:"
                  placeholder="Zip"
                />
              </div>
              <div></div>



            </div>

            <div className="mt-0 flex justify-end p-0 max-2xl:justify-center">
              <Button className="px-10 text-white" variant={"submit"}>
                Send
              </Button>
            </div>

            <div className="hidden grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={northLeadsTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="brand"
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

const EquipmentOrders = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Status", header: "Status" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newNorthBlindLeadSchema>>({
    resolver: zodResolver(newNorthBlindLeadSchema),
    defaultValues: {
      Email: "",
      Name: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newNorthBlindLeadSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <h1 className="mt-10 text-xl font-medium text-sky-500">
              North Blind Leads for Merchant
            </h1>
            <span>You can send up to 15 Leads per day. (You have 15 more)</span>

            <div className="my-5 grid grid-cols-2 gap-2">
              <InputForm
                control={form.control}
                formName="Email"
                label="Email"
                placeholder="Insert a valid Email"
              />
              <InputForm
                control={form.control}
                formName="Name"
                label="Name:"
                placeholder="Insert a name"
              />
            </div>
            <div className="mt-0 flex justify-end p-0 max-2xl:justify-center">
              <Button className="px-10" variant={"submit"}>
                Send
              </Button>
            </div>

            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={northLeadsTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="brand"
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

const OrderNewEquipment = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Status", header: "Status" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newFspLeadSchema>>({
    resolver: zodResolver(newFspLeadSchema),
    defaultValues: {
      Email: "",
      Name: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newFspLeadSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <h1 className="mt-10 text-xl font-medium text-sky-500">
              FSP Blind Leads for Merchant
            </h1>
            <span>You can send up to 20 Leads per day. (You have 20 more)</span>

            <div className="my-5 grid grid-cols-2 gap-2">
              <InputForm
                control={form.control}
                formName="Email"
                label="Email"
                placeholder="Insert a valid Email"
              />
              <InputForm
                control={form.control}
                formName="Name"
                label="Name:"
                placeholder="Insert a name"
              />
            </div>
            <div className="mt-0 flex justify-end p-0 max-2xl:justify-center">
              <Button className="px-10" variant={"submit"}>
                Send
              </Button>
            </div>

            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={fspLeadsTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="brand"
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

const UploadDocuments = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Status", header: "Status" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newFspLeadSchema>>({
    resolver: zodResolver(newFspLeadSchema),
    defaultValues: {
      Email: "",
      Name: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newFspLeadSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <h1 className="mt-10 text-xl font-medium text-sky-500">
              FSP Blind Leads for Merchant
            </h1>
            <span>You can send up to 20 Leads per day. (You have 20 more)</span>

            <div className="my-5 grid grid-cols-2 gap-2">
              <InputForm
                control={form.control}
                formName="Email"
                label="Email"
                placeholder="Insert a valid Email"
              />
              <InputForm
                control={form.control}
                formName="Name"
                label="Name:"
                placeholder="Insert a name"
              />
            </div>
            <div className="mt-0 flex justify-end p-0 max-2xl:justify-center">
              <Button className="px-10" variant={"submit"}>
                Send
              </Button>
            </div>

            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={fspLeadsTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="brand"
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

export default function RenderBoardingMerchantTabComponents(value: string) {
  switch (value) {
    case "merchantInformation":
      return <MerchantInformation />;
    case "equipmentOrders":
      return <EquipmentOrders />;
    case "orderNewEquipment":
      return <OrderNewEquipment />;
    case "uploadDocuments":
      return <UploadDocuments />;
  }
}
