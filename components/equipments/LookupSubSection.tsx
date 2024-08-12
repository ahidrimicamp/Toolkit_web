import React from "react";
import { Form } from "../ui/form";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { newItemDetailSchema } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { SelectForm } from "../Shared/InstantForm";
import {
  ConditionSelectList,
  LookupTable,
  serialList,
  sortByList,
} from "@/constants";
import { Button } from "../ui/button";
import DataTable from "../Shared/DataTable/DataTable";

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
      <div className="rounded-md border p-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex gap-2 p-2">
              <div className="w-full flex-1">
                <SelectForm
                  control={form.control}
                  formName={"Condition"}
                  label="Condition"
                  placeholder={""}
                  content={ConditionSelectList}
                  valueKey="id"
                  displayKey="title"
                  disabled={false}
                  className=""
                />
              </div>
              <div className="w-full flex-1">
                <SelectForm
                  control={form.control}
                  formName="Serial"
                  label="Serial"
                  placeholder={""}
                  content={serialList}
                  valueKey="id"
                  displayKey="title"
                  disabled={false}
                  className=""
                />
              </div>
              <div className="w-full flex-1">
                <SelectForm
                  control={form.control}
                  formName="SortBy"
                  label="Sort By"
                  placeholder={""}
                  content={sortByList}
                  valueKey="id"
                  displayKey="title"
                  disabled={false}
                  className=""
                />
              </div>
              <div className="content-end">
                <Button className="block bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
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
            <div className="flex w-full justify-end gap-2">
              <Button className="my-5 bg-gradient-to-r from-[#828282] to-[#353535] px-5 text-white hover:opacity-90">
                Do Inventory
              </Button>
              <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-5 text-white hover:opacity-90">
                Add Detail
              </Button>
              <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-5 text-white hover:opacity-90">
                Edit Detail
              </Button>
              <Button className="my-5 bg-gradient-to-r from-[#FF3333] to-[#8F0000] px-5 text-white hover:opacity-90">
                Delete Detail
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LookupSubSection;
