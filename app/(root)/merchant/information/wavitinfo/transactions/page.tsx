"use client";
import React from 'react'
import { z } from "zod";
import { newMerchantSchema, cn, formatCurrency } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ContentItem, DataTypes } from "@/types";
import { wavitTransactionsTable } from "@/constants";
import DataTable from '@/components/Shared/DataTable/DataTable';
import { ColumnConfig, createColumns } from '@/components/Shared/DataTable/Columns';
import { Form } from '@/components/ui/form';
import { CheckboxForm, DatePickerForm } from '@/components/Shared/InstantForm';
import { Button } from '@/components/ui/button';

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
    { accessorKey: "Porcentage", header: "%" }
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

              <div className=' gap-0 mt-4'>

                <div className='flex flex-row gap-2'>
                  <div className="flex flex-1 gap-2 content-center justify-end">
                    <label className="text-sm content-center text-nowrap font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">From Date</label>
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/2024"
                    />
                  </div>
                  <div className="flex flex-1 col-auto content-center m-auto self-start">
                    <div className="content-center text-nowrap justify-start">
                      <CheckboxForm
                        control={form.control}
                        formName="ChildMID"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1 text-nowrap">Look for Trouble</span>
                  </div>
                  <div className='flex-1'>

                  </div>
                  <Button className=" mb-2 mt-2 flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                    Update
                  </Button>
                </div>

                <div className='flex flex-row gap-2'>
                  <div className="flex flex-1 gap-2 content-center justify-end">
                    <label className="text-sm content-center text-nowrap font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      To Date
                    </label>
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/2024"
                    />
                  </div>
                  <div className="flex flex-1 col-auto content-center m-auto self-start">
                    <div className="content-center text-nowrap justify-start">
                      <CheckboxForm
                        control={form.control}
                        formName="BusinessRetail"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1 text-nowrap">Look for Debit Business (slow)</span>
                  </div>
                  <div className='flex flex-1'>
                    <div className="content-center text-nowrap justify-start">
                      <CheckboxForm
                        control={form.control}
                        formName="BusinessEcommerce"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1 text-nowrap">Save to c:\mcs_toolkit</span>
                  </div>
                  <Button className=" mb-2 mt-2 flex-1 bg-gradient-to-r from-[#828282] to-[#353535] hover:opacity-90 text-white">
                    Export Table
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className='w-full'>
          <DataTable
            columns={columns}
            data={wavitTransactionsTable}
            enableColumnFilter={true}
            filteredBy='Documents'
          />

        </div>

      </section>
    </>
  )
}

export default page