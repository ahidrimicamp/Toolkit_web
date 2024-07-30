"use client";

import AgentSetup from "@/components/agent/AgentSetup";
import ExtremeDataTable from "@/components/Shared/DataTable/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { agentData } from "@/constants";
import React from "react";
import DataTable from '@/components/Shared/DataTable/DataTable';
import { ColumnConfig, createColumns } from '@/components/Shared/DataTable/Columns';
import { DataTypes } from "@/types";

const page = () => {
  const list = [
    { id: 1, title: "List", value: "list" },
    { id: 2, title: "Setup", value: "setup" },
    { id: 3, title: "Reports", value: "report" },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "Agent ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "location", header: "Location" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    // <div>
    //   <Tabs defaultValue="list" className="size-full p-12">
    //     <TabsList>
    //       {list.map((list) => (
    //         <TabsTrigger value={list.value} key={list.id}>
    //           {list.title}
    //         </TabsTrigger>
    //       ))}
    //     </TabsList>
    //     {list.map((tab) => (
    //       <div key={tab.value}>
    //         {tab.value === "list" && (
    //           <TabsContent value={tab.value} key={tab.id}>
    //             {/* <ExtremeDataTable data={agentData} pageSize={10} /> */}
    //             <DataTable
    //               columns={columns}
    //               data={agentData}
    //               enableColumnFilter={true}
    //               filteredBy='username'
    //             />
    //           </TabsContent>
    //         )}

    //         {tab.value === "setup" && (
    //           <TabsContent value={tab.value} key={tab.id}>
    //             <AgentSetup />
    //           </TabsContent>
    //         )}
    //       </div>
    //     ))}
    //   </Tabs>
    // </div>

    <div className="">
      <h1 className='text-2xl text-sky-500 mb-3 '>Agent List</h1>
      <DataTable
        columns={columns}
        data={agentData}
        enableColumnFilter={true}
        filteredBy="name"
      />
    </div>
  );
};

export default page;
