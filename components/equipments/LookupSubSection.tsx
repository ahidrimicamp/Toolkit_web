import React from 'react'
import { Form } from '../ui/form'
import { ColumnConfig, createColumns } from '../Shared/DataTable/Columns';
import { DataTypes } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { newItemDetailSchema, newItemsSchema } from '@/lib/utils';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { SelectForm } from '../Shared/InstantForm';
import { ConditionSelectList, LookupTable, serialList, sortByList } from '@/constants';
import { Button } from '../ui/button';
import DataTable from '../Shared/DataTable/DataTable';

const LookupSubSection = () => {

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Model" },
    { accessorKey: "Condition", header: "Condition" },
    { accessorKey: "Serial", header: "Serial #" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Del", header: "Del." },

  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newItemDetailSchema>>({
    resolver: zodResolver(newItemDetailSchema),
    defaultValues: {
      Condition: "",
      Serial: "",
      SortBy: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newItemDetailSchema>) => {
    console.log(value);
  };

  return (
    <>
      <div className="border  rounded-md p-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

            <div className="flex p-2 gap-2">
              <div className="flex-1 w-full">
                <SelectForm
                  control={form.control}
                  formName={"Condition"}
                  label="Condition"
                  placeholder={""}
                  content={ConditionSelectList}
                  valueKey='id'
                  displayKey='title'
                  disabled={false}
                  className=""
                />
              </div>
              <div className="flex-1 w-full">
                <SelectForm
                  control={form.control}
                  formName="Serial"
                  label="Serial"
                  placeholder={""}
                  content={serialList}
                  valueKey='id'
                  displayKey='title'
                  disabled={false}
                  className=""
                />
              </div>
              <div className="flex-1 w-full">
                <SelectForm
                  control={form.control}
                  formName="SortBy"
                  label="Sort By"
                  placeholder={""}
                  content={sortByList}
                  valueKey='id'
                  displayKey='title'
                  disabled={false}
                  className=""
                />
              </div>
              <div className="content-end">
                <Button className="px-10 block bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Save
                </Button>
              </div>

            </div>
            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={LookupTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="brand"
              />
            </div>
            <div className="flex w-full gap-2 justify-end">
              <Button className="px-5 my-5 bg-gradient-to-r from-[#828282] to-[#353535] hover:opacity-90 text-white">
                Do Inventory
              </Button>
              <Button className="px-5 my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                Add Detail
              </Button>
              <Button className="px-5 my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                Edit Detail
              </Button>
              <Button className="px-5 my-5 bg-gradient-to-r from-[#FF3333] to-[#8F0000] hover:opacity-90 text-white">
                Delete Detail
              </Button>
            </div>

          </form>
        </Form>
      </div>

    </>
  )
}

export default LookupSubSection