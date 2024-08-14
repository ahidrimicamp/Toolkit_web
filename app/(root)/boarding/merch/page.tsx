"use client";
import React from 'react'
import { ColumnConfig, createColumns } from '@/components/Shared/DataTable/Columns';
import DataTable from '@/components/Shared/DataTable/DataTable';
import { InputForm, SelectForm } from '@/components/Shared/InstantForm';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { agentCompanyNameSelectList, merchantForAgentTable } from '@/constants';
import { searchMerchantSchema } from '@/lib/utils';
import { DataTypes } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const page = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "Id" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "OpenDate", header: "Open date" },
    { accessorKey: "ClosedDate", header: "Closed Date" },
    { accessorKey: "Processor", header: "Processor" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof searchMerchantSchema>>({
    resolver: zodResolver(searchMerchantSchema),
    defaultValues: {
      MerchantName: "",
      Agent: "",
    },
  });

  const onSubmit = (value: z.infer<typeof searchMerchantSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 text-start">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" gap-2">

            <h1 className="text-center font-medium text-sky-500 text-xl my-5">Find Merchants & Order Equipment</h1>

            {/* SEARCH DIV */}
            <div className="w-3/6 max-xl:w-5/6 space-y-2">
              <div className="m-auto w-full flex gap-2 items-end">
                <div className="w-3/4">
                  <InputForm
                    control={form.control}
                    formName={"MerchantName"}
                    label="Search by the Merchant's Name"
                    placeholder={""}
                  />
                </div>
                <Button className="flex-auto px-2 mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Search For Merchant
                </Button>
              </div>
              <div className="w-3/4">
                <SelectForm
                  control={form.control}
                  formName={"Agent"}
                  label="Agent / Company Name (choose one and 'Search')"
                  placeholder={"Select Agent or Company Name"}
                  content={agentCompanyNameSelectList}
                  valueKey='value'
                  displayKey='title'
                  disabled={false}
                  className=""
                />
              </div>
            </div>


            <h3 className="mt-10 text-xl font-semibold">Merchants for agent: Agents Name</h3>
            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={merchantForAgentTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="brand"
                actionsColumn={false}
              />
            </div>

          </form>
        </Form>
      </section>
    </>
  )
}

export default page