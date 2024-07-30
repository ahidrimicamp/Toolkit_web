"use client";
import React from 'react'
import { ContentItem, DataTypes } from "@/types";
import { wavitSettingsTable } from "@/constants";
import DataTable from '@/components/Shared/DataTable/DataTable';
import { ColumnConfig, createColumns } from '@/components/Shared/DataTable/Columns';

const columnsConfig: ColumnConfig<DataTypes>[] = [
  { accessorKey: "Description", header: "Description" },
  { accessorKey: "Value", header: "Value" }
];

const columns = createColumns(columnsConfig);

const page = () => {
  return (
    <>
      <section>
        <div className="w-1/2">
          <DataTable
            columns={columns}
            data={wavitSettingsTable}
            enableColumnFilter={true}
            filteredBy='Documents'
          />
        </div>
      </section>
    </>
  )
}

export default page