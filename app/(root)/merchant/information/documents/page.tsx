/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
// import { z } from "zod";
// import { newMerchantSchema } from "@/lib/utils";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { documentsTable } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";

const page = () => {
  // const form = useForm<z.infer<typeof newMerchantSchema>>({
  //   resolver: zodResolver(newMerchantSchema),
  //   defaultValues: {
  //     MID: "",
  //     LegalName: "",
  //     DBA: "",
  //     Phone: "",
  //     Status: "",
  //     Approval: "",
  //     Filter: "",
  //     Processor: "",
  //     Fitler2: "",
  //     AgentID: 0,
  //     SalesRep: "",
  //     Split: 0,
  //     SplitName: "",
  //     SplitID: 0,
  //     LeadSource: "",
  //     SplitLead: 0,
  //     EstAnnual: 0,
  //     Transactions: 0,
  //     Filter3: "",
  //     Banks: "",
  //     WAVItAccount: 0,
  //     MCCCode: "",
  //     Notice: "",
  //     ChildMID: false,
  //     WAVitAccount: false,
  //     WAVitApp: false,
  //     NewAccountTasks: false,
  //     BusinessRetail: false,
  //     BusinessEcommerce: false,
  //     BusinessRestaurant: false,
  //     BusinessMoTo: false,
  //     DeployBy: "",
  //   },
  // });

  // const onSubmit = (value: z.infer<typeof newMerchantSchema>) => {
  //   console.log(value);
  // };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DocType", header: "Doc Type" },
    { accessorKey: "Historic", header: "Historic" },
    { accessorKey: "DocName", header: "Doc Name" },
    { accessorKey: "FileSize", header: "File Size" },
    { accessorKey: "UploadDateTime", header: "Upload Date/Time" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section>
        <h1 className="mb-3 text-2xl text-sky-500">Documents</h1>

        <div className="mb-5 mt-3 size-full flex-1 rounded-md  ">
          {/* <ExtremeDataTable
            pageSize={5}
            data={documentsTable}
            columnsToDisplay={["Doc type", "Historic", "Doc Name", "File Size", "Upload Date/Time"]}
          /> */}
          <DataTable
            columns={columns}
            data={documentsTable}
            enableColumnFilter={true}
            filteredBy="username"
          />
        </div>
        <div className="flex justify-between gap-8">
          <div className="flex gap-2">
            <Button className="rounded-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
              +
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
              -
            </Button>
            <div className="flex items-center gap-2">
              <Checkbox />
              <span className="text-nowrap">Show Deleted Documents</span>
            </div>
          </div>
          <div>
            <Button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
              Generate Upload Link
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
