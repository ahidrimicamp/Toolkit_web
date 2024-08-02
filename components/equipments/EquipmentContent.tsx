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
import { documentsTable, agentAdjustments, agentEmailList, equipmentData } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EquipmentReportForm from "@/components/equipments/EquipmentReportForm";

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
      <div className="grid grid-cols-2 overflow-auto  max-2xl:grid-cols-1">
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

export default function RenderEquipmentComponents(value: string) {
  switch (value) {
   
    case "lookup":
      return <Billing />;
    case "items":
      return <CustomerFinance />;
    case "reports":
      return <Reports />;
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
