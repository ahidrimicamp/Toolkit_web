"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { agentData } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import AgentResidualsContent from "./AgentResidualsContent";
import { Form } from "../ui/form";
import { AgentEquipmentSchema } from "@/lib/utils";
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
import { documentsTable, agentAdjustments, agentEmailList } from "@/constants";



const Billing = () => {
  return (
    <>
      <div className='m-auto mt-10 text-center'>
        <Button className='w-2/5 m-auto text-center'>Show Billing Ruless</Button>
      </div>
    </>
  )
}

const CustomerFinance = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-5">Customer Finance</h1>
    </>
  )
}

const Equipment = () => {

  const formEquipment = useForm<z.infer<typeof AgentEquipmentSchema>>({
    resolver: zodResolver(AgentEquipmentSchema),
    defaultValues: {
      copyFromContactInfo: false,
      noShippingEmails: false,
      coCard: false,
      markClosed: false,
      shipPhone: "",
      shipExt: "",
      shippingEmail: "",
      shippingServiceEmail: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      cellPhone: ""
    },
  });

  const onSubmit = (values: z.infer<typeof AgentEquipmentSchema>) => {
    console.log(values);
  };
  return (
    <>
      <Form {...formEquipment}>
        <form onSubmit={formEquipment.handleSubmit(onSubmit)} className="space-y-2">
          <div className="mt-5 m-auto w-4/6">
            <h1 className="text-center font-bold text-2xl">Shipping Information</h1>

            <div className="flex my-5 gap-5 items-center justify-center">
              <div className="flex gap-2">
                <Checkbox />
                <span className="flex gap-5 text-sm content-center">
                  Copy from Contact Info
                </span>
              </div>
              <div className="flex gap-2">
                <Checkbox />
                <span className="flex gap-5 text-sm content-center">
                  No Shipping Emails
                </span>
              </div>
            </div>

            <div className="flex gap-3 my-3">
              <p className="w-2/6 pt-2 text-end text-nowrap content-center">Address 1</p>
              <div className='w-4/6'>
                <InputForm
                  control={formEquipment.control}
                  formName="address1"
                  label=""
                  placeholder='Enter text...'
                />
              </div>
            </div>
            <div className="flex gap-3 my-3">
              <p className="w-2/6 pt-2 text-end text-nowrap content-center">Address 2</p>
              <div className='w-4/6'>
                <InputForm
                  control={formEquipment.control}
                  formName="address2"
                  label=""
                  placeholder='Enter text...'
                />
              </div>
            </div>
            <div className="flex gap-3 my-3">
              <p className="w-2/6 pt-2 text-end text-nowrap content-center">City / State / Zip</p>
              <div className="flex w-4/6 gap-2">
                <div className='w-3/6'>
                  <InputForm
                    control={formEquipment.control}
                    formName="city"
                    label=""
                    placeholder='City'
                  />
                </div>
                <div className='w-1/6'>
                  <InputForm
                    control={formEquipment.control}
                    formName="state"
                    label=""
                    placeholder='St'
                  />
                </div>
                <div className='w-2/6'>
                  <InputForm
                    control={formEquipment.control}
                    formName="zip"
                    label=""
                    placeholder='Zipcode'
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 my-3">
              <p className="w-2/6 pt-2 text-end text-nowrap content-center">Shipping Email</p>
              <div className='w-4/6'>
                <InputForm
                  control={formEquipment.control}
                  formName="shippingEmail"
                  label=""
                  placeholder='Valid Email'
                />
              </div>
            </div>
            <div className="flex gap-3 my-3">
              <p className="w-2/6 pt-2 text-end text-nowrap content-center">Costumer Service Email</p>
              <div className='w-4/6'>
                <InputForm
                  control={formEquipment.control}
                  formName="shippingServiceEmail"
                  label=""
                  placeholder='Valid Email'
                />
              </div>
            </div>

            <Button className="w-full my-4 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white text-lg">
              CLICK HERE: Anyone can Save Shipping Info Above
            </Button>

            <h1 className="text-center my-4 font-bold text-2xl">Extra Information</h1>

            <div className="flex gap-2 content-center justify-center">
              <CheckboxForm
                control={formEquipment.control}
                formName="coCard"
                label=""
                placeholder=""
                className="content-center items-center align-middle mt-3"
              />
              <span className="content-center mt-1">CoCard</span>
            </div>
            <div className="flex gap-3 my-3">
              <p className="w-2/6 pt-2 text-end text-nowrap content-center">Cell Phone</p>
              <div className='w-4/6'>
                <InputForm
                  control={formEquipment.control}
                  formName="cellPhone"
                  label=""
                  placeholder='(___) ____-______'
                />
              </div>
            </div>
            <div className="flex gap-2 content-center mt-10 justify-center">
              <CheckboxForm
                control={formEquipment.control}
                formName="markClosed"
                label=""
                placeholder=""
                className="content-center items-center align-middle mt-3"
              />
              <span className="content-center mt-1">Mark as Closed (ADMINS Only)</span>
            </div>

          </div>
        </form>
      </Form>
    </>
  )
}

const Documentation = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DocType", header: "Doc Type" },
    { accessorKey: "Historic", header: "Historic" },
    { accessorKey: "DocName", header: "Doc Name" },
    { accessorKey: "FileSize", header: "File size" },
    { accessorKey: "UploadDateTime", header: "Upload Date/Time" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section>
        <div className="flex justify-between my-5" >
          <div className="flex gap-2 pl-3">
            <Checkbox />
            <span className="flex gap-5 text-nowrap text-sm content-center">
              Show Deleted Documents
            </span>
          </div>

          <div className="flex gap-2">
            <Button className="rounded-full bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
              +
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
              -
            </Button>
          </div>
        </div>

        <div className='w-full  rounded-md p-2'>
          <DataTable
            columns={columns}
            data={documentsTable}
            enableColumnFilter={true}
            filteredBy='username'
          />
        </div>

      </section>
    </>
  )
}

const Reporting = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-5">Reporting</h1>
    </>
  )
}

const EmailLists = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Email", header: "Email" }
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section>

        <div className="mt-7 w-11/12 m-auto">
          <div className="flex justify-between px-2">
            <h2 className="text-2xl font-semibold content-center">Email Notices:</h2>
            <div className="flex gap-2">
              <Button className="rounded-md bg-gradient-to-r from-[#828282] to-[#353535] hover:opacity-90 text-white">
                Add Item
              </Button>
              <Button className="rounded-md bg-gradient-to-r from-[#C05353] to-[#8F0000] hover:opacity-90 text-white">
                Delete Item
              </Button>
            </div>
          </div>
          <div className='w-full  rounded-md p-2 text-sm'>
            <DataTable
              columns={columns}
              data={agentEmailList}
              enableColumnFilter={false}
              pagination={true}
              filteredBy='username'
            />
          </div>
        </div>
        <div className="mt-7 w-11/12 m-auto">
          <div className="flex justify-between px-2">
            <h2 className="text-2xl font-semibold content-center">Email Reports:</h2>
            <div className="flex gap-2">
              <Button className="rounded-md bg-gradient-to-r from-[#828282] to-[#353535] hover:opacity-90 text-white">
                Add Item
              </Button>
              <Button className="rounded-md bg-gradient-to-r from-[#C05353] to-[#8F0000] hover:opacity-90 text-white">
                Delete Item
              </Button>
            </div>
          </div>
          <div className='w-full  rounded-md p-2 text-sm'>
            <DataTable
              columns={columns}
              data={agentEmailList}
              enableColumnFilter={false}
              filteredBy='username'
            />
          </div>
        </div>
        <div className="mt-7 w-11/12 m-auto">
          <div className="flex justify-between px-2">
            <h2 className="text-2xl font-semibold content-center">Email Residuals:</h2>
            <div className="flex gap-2">
              <Button className="rounded-md bg-gradient-to-r from-[#828282] to-[#353535] hover:opacity-90 text-white">
                Add Item
              </Button>
              <Button className="rounded-md bg-gradient-to-r from-[#C05353] to-[#8F0000] hover:opacity-90 text-white">
                Delete Item
              </Button>
            </div>
          </div>
          <div className='w-full  rounded-md p-2 text-sm'>
            <DataTable
              columns={columns}
              data={agentEmailList}
              enableColumnFilter={false}
              filteredBy='username'
            />
          </div>
        </div>

      </section>
    </>
  )
}

const Adjustments = () => {
  {/* COSTUMIZATION OF THE COLUMN PRICE */ }
  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
    return <div className="text-left font-medium">{formatted}</div>;
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "Amount", header: "Amount", cell: Price },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-5">Adjustments</h1>

      <div className='w-full  rounded-md p-2'>
        <DataTable
          columns={columns}
          data={agentAdjustments}
          enableColumnFilter={true}
          filteredBy='username'
        />

      </div>

    </>
  )
}

export default function RenderSetupComponents(value: string) {
  switch (value) {
    case "residuals":
      return <AgentResidualsContent />;
    case "billing":
      return <Billing />;
    case "customerFinance":
      return <CustomerFinance />;
    case "equipment":
      return <Equipment />;
    case "documentation":
      return <Documentation />;
    case "reporting":
      return <Reporting />;
    case "emailLists":
      return <EmailLists />;
    case "adjustments":
      return <Adjustments />;
  }
}
