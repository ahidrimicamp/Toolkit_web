"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ExtremeDataTable from "./DataTable";
import DataTable from '@/components/Shared/DataTable/DataTable';
import { ColumnConfig, createColumns } from '@/components/Shared/DataTable/Columns';
import { DataTypes } from "@/types";

// Mock up data
const orders = [
  {
    id: 1,
    customer: "Liam Johnson",
    email: "liam@example.com",
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-23",
    amount: "$250.00",
  },
  {
    id: 2,
    customer: "Emma Wilson",
    email: "emma@example.com",
    type: "Purchase",
    status: "Pending",
    date: "2023-06-24",
    amount: "$150.00",
  },
  {
    id: 3,
    customer: "Noah Brown",
    email: "noah@example.com",
    type: "Sale",
    status: "Shipped",
    date: "2023-06-25",
    amount: "$300.00",
  },
  {
    id: 4,
    customer: "Olivia Davis",
    email: "olivia@example.com",
    type: "Return",
    status: "Processed",
    date: "2023-06-26",
    amount: "$50.00",
  },
  {
    id: 5,
    customer: "James Miller",
    email: "james@example.com",
    type: "Purchase",
    status: "Cancelled",
    date: "2023-06-27",
    amount: "$200.00",
  },
  {
    id: 6,
    customer: "Sophia Martinez",
    email: "sophia@example.com",
    type: "Sale",
    status: "Denied",
    date: "2023-06-28",
    amount: "$400.00",
  },
  {
    id: 7,
    customer: "Benjamin Anderson",
    email: "benjamin@example.com",
    type: "Return",
    status: "Pending",
    date: "2023-06-29",
    amount: "$75.00",
  },
  {
    id: 8,
    customer: "Isabella Hernandez",
    email: "isabella@example.com",
    type: "Purchase",
    status: "Pending",
    date: "2023-06-30",
    amount: "$500.00",
  },
  {
    id: 9,
    customer: "Lucas Moore",
    email: "lucas@example.com",
    type: "Sale",
    status: "Success",
    date: "2023-07-01",
    amount: "$350.00",
  },
  {
    id: 10,
    customer: "Mia Taylor",
    email: "mia@example.com",
    type: "Purchase",
    status: "Success",
    date: "2023-07-02",
    amount: "$100.00",
  },
  // Add more order data as needed
];

const columnsConfig: ColumnConfig<DataTypes>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "date", header: "Date" },
  { accessorKey: "amount", header: "Amount" }
];

const columns = createColumns(columnsConfig);

export default function DataTableOrders() {
  return (
    <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Orders</CardTitle>
          <CardDescription>Recent orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* <ExtremeDataTable
            pageSize={7}
            data={orders}
            columnsToDisplay={["id", "type", "status", "date", "amount"]}
          /> */}
          <DataTable
            columns={columns}
            data={orders}
            enableColumnFilter={true}
            filteredBy='username'
          />
        </CardContent>
      </Card>
    </div>
  );
}
