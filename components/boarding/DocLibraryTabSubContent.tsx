"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  blankMPAsAndAddendumsTable,
  changeFormsTable,
  equipmentPricingTable,
} from "@/constants";
import { DataTypes } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import AddFileFinance from "./AddFileFinance";

const BlankMpaAddendums = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "FileName", header: "File Name" },
    { accessorKey: "Size", header: "Size" },
    { accessorKey: "LastUpdate", header: "Last Update" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="text-center text-2xl font-medium text-sky-500">
        Blank MPAs & Addendums
      </h1>

      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={blankMPAsAndAddendumsTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="FileName"
        />
      </div>
    </section>
  );
};

const ChangeForms = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "FileName", header: "File Name" },
    { accessorKey: "Size", header: "Size" },
    { accessorKey: "LastUpdate", header: "Last Update" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="text-center text-2xl font-medium text-sky-500">
        Change Forms
      </h1>

      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={changeFormsTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="FileName"
        />
      </div>
    </section>
  );
};

const EquipmentPricing = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "FileName", header: "File Name" },
    { accessorKey: "Size", header: "Size" },
    { accessorKey: "LastUpdate", header: "Last Update" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="text-center text-2xl font-medium text-sky-500">
        Equipment Pricing
      </h1>

      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={equipmentPricingTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="FileName"
        />
      </div>
    </section>
  );
};

const UploadAndSendDocuments = () => {
  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="text-center text-2xl font-medium text-sky-500">
        Upload & Send Documents
      </h1>

      <div className="my-20 grid grid-cols-3 gap-2 px-10">
        {/* FINANCE BUTTON */}
        <Dialog>
          <DialogTrigger>
            <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
              <h1 className="text-center font-semibold">To Finance</h1>
              <div className="flex gap-4 px-2">
                <Image
                  className="m-auto flex-none"
                  src="/icon/colorful/finance-reports.svg"
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                />
                <p className="flex-1 content-center justify-start text-start text-sm">
                  Send financial documents, CC ACHs, bank ACHs, blank checks,
                  and invoices.
                </p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="2xl:[600px] max-lg:max-w-[600px] lg:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="mb-5 text-center text-2xl font-semibold text-sky-500">
                Attach File
              </DialogTitle>
              <AddFileFinance />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* SHIPPING AND EQUIPMENT BUTTON */}
        <Dialog>
          <DialogTrigger>
            <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
              <h1 className="text-center font-semibold">
                To Shipping and Equipment
              </h1>
              <div className="flex gap-4 px-2">
                <Image
                  className="m-auto flex-none"
                  src="/icon/colorful/shipping.svg"
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                />
                <p className="flex-1 content-center justify-start text-start text-sm">
                  Send shipping documents.
                </p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="2xl:[600px] max-lg:max-w-[600px] lg:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="mb-5 text-center text-2xl font-semibold text-sky-500">
                Attach File
              </DialogTitle>
              <AddFileFinance />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* MERCHANT SUPPORT BUTTON */}
        <Dialog>
          <DialogTrigger>
            <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
              <h1 className="text-center font-semibold">To Merchant Support</h1>
              <div className="flex gap-4 px-2">
                <Image
                  className="m-auto flex-none"
                  src="/icon/colorful/merchant.svg"
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                />
                <p className="flex-1 content-center justify-start text-start text-sm">
                  Send merchant support documents and requests.
                </p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="2xl:[600px] max-lg:max-w-[600px] lg:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="mb-5 text-center text-2xl font-semibold text-sky-500">
                Attach File
              </DialogTitle>
              <AddFileFinance />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* TO PROGRAMMING BUTTON */}
        <Dialog>
          <DialogTrigger>
            <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
              <h1 className="text-center font-semibold">To Programming</h1>
              <div className="flex gap-4 px-2">
                <Image
                  className="m-auto flex-none"
                  src="/icon/colorful/programming.svg"
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                />
                <p className="flex-1 content-center justify-start text-start text-sm">
                  Send programming documents and requests.
                </p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="2xl:[600px] max-lg:max-w-[600px] lg:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="mb-5 text-center text-2xl font-semibold text-sky-500">
                Attach File
              </DialogTitle>
              <AddFileFinance />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* MARKETING BUTTON */}
        <Dialog>
          <DialogTrigger>
            <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
              <h1 className="text-center font-semibold">To Marketing</h1>
              <div className="flex gap-4 px-2">
                <Image
                  className="m-auto flex-none"
                  src="/icon/colorful/marketing.svg"
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                />
                <p className="flex-1 content-center justify-start text-start text-sm">
                  Send marketing documents and invoices.
                </p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="2xl:[600px] max-lg:max-w-[600px] lg:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="mb-5 text-center text-2xl font-semibold text-sky-500">
                Attach File
              </DialogTitle>
              <AddFileFinance />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* APPLICATION BUTTON */}
        <Dialog>
          <DialogTrigger>
            <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
              <h1 className="text-center font-semibold">To Applications</h1>
              <div className="flex gap-4 px-2">
                <Image
                  className="m-auto flex-none"
                  src="/icon/colorful/list.svg"
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                />
                <p className="flex-1 content-center justify-start text-start text-sm">
                  Send applications documents to underwriting department.
                </p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="2xl:[600px] max-lg:max-w-[600px] lg:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="mb-5 text-center text-2xl font-semibold text-sky-500">
                Attach File
              </DialogTitle>
              <AddFileFinance />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default function RenderDocLibraryTabComponents(value: string) {
  switch (value) {
    case "blankMpaAndAddendums":
      return <BlankMpaAddendums />;
    case "changeForms":
      return <ChangeForms />;
    case "equipmentPricing":
      return <EquipmentPricing />;
    case "uploadAndSendDocs":
      return <UploadAndSendDocuments />;
  }
}
