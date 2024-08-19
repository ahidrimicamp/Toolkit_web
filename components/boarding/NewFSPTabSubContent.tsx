"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  dbaAddressFspForm,
  dbaInformationFspForm,
  dbaLegalInformationFspForm,
  dbaTaxInformationFspForm,
  equipmentData,
  itemsForm,
  lookupForm,
  LookupTable,
  ModelSelectList,
} from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Form } from "../ui/form";
import {
  merchantInformationFspSchema,
  newItemsSchema,
  newLookupSchema,
  newRecentOrdersSchema,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  DatePickerForm,
  FormGeneration,
  InputForm,
  SelectForm,
} from "../Shared/InstantForm";
import { Card } from "../ui/card";
import CustomButtons from "../Shared/CustomButtons";
import { Switch } from "../ui/switch";

// testing an automatic tool to generate the forms

const MerchantDetail = () => {
  const form = useForm<z.infer<typeof merchantInformationFspSchema>>({
    resolver: zodResolver(merchantInformationFspSchema),
    defaultValues: {
      MerchantName: "",
      EmailStatements: "",
      Phone: "",
      Fax: "",
      ContactName: "",
      ContactPhone: "",
      ContactServicePhone: "",
      BusinessWebsite: "",
      DateOpen: "",
      Street: "",
      AddressSearchBar: "",
      City: "",
      State: "",
      PostalCode: "",
      CorporateLegalName: "",
      Locations: "",
      LegalCity: "",
      LegalState: "",
      LegalPostalCode: "",
      UseCorporateLegalName: "",
      IrsName: "",
      SICMCC: "",
      EIN: "",
      BusinessType: "",
      TypeOfServicesOffered: "",
      EinSsn: "",
      StockSymbol: "",
      MailStatements: "",
      BuildingType: "",
      MerchantType: "",
      AreaZoned: "",
      SquereFootage: "",
    },
  });

  const onSubmit = (value: z.infer<typeof merchantInformationFspSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="text-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            {/* DBA Information Section */}
            <h1 className="my-5 text-2xl font-bold text-sky-500">
              DBA Information
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={dbaInformationFspForm}
            />

            {/* DBA Address Section */}
            <h1 className="my-5 text-2xl font-bold text-sky-500">
              DBA Address Information
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={dbaAddressFspForm}
            />

            {/* LEGAL INFORMATION Section */}
            <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
              Legal Information
            </h1>
            <div className="mb-2 flex gap-2">
              <Switch className="flex-none" />
              <p className="flex-auto">Use Business Address DBA</p>
            </div>
            <FormGeneration
              formControl={form.control}
              formFields={dbaLegalInformationFspForm}
            />

            {/* TAX INFORMATION Section */}
            <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
              Tax Information
            </h1>
            <div className="mb-2 flex gap-2">
              <Switch className="flex-none" />
              <p className="flex-auto">Use Corporate Legal Name</p>
            </div>
            <FormGeneration
              formControl={form.control}
              formFields={dbaTaxInformationFspForm}
            />
            <div className="flex items-center gap-2">
              <InputForm
                control={form.control}
                formName="EinSsn"
                label=""
                type="radio"
                className="w-fit"
              />
              <label className="mt-2">EIN</label>
              <InputForm
                control={form.control}
                formName="EinSsn"
                label=""
                type="radio"
                className="ml-4 w-fit"
              />
              <label className="mt-2">SSN</label>
            </div>

            {/* STATEMENTS INFORMATION SECTION */}
            <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
              Statements Information
            </h1>
            <div className="grid w-3/6 grid-cols-2 gap-0">
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="MailStatements"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Mail Statements to DBA Name</label>
              </div>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="MailStatements"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Mail Chargebacks to DBA Name</label>
              </div>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="MailStatements"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Mail Statements to Legal Name</label>
              </div>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="MailStatements"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Mail Chargebacks to DBA Name</label>
              </div>
            </div>
            <p className="ml-4 text-gray-500">
              NOTE: Statements are {"'Summary'"} for Cash Discount apps &{" "}
              {"'Detailed'"}{" "}
            </p>

            {/* LOCATION SECTION */}
            <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
              Location Information
            </h1>
            <div className="grid grid-cols-4 gap-2">
              {/* BUILDING TYPE */}
              <div>
                <h2 className="text-center text-xl font-semibold">
                  Building Type
                </h2>
                <div className="flex items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="BuildingType"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">Shopping Center</label>
                </div>
                <div className="flex items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="BuildingType"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">Office Building</label>
                </div>
                <div className="flex items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="BuildingType"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">Industrial Building</label>
                </div>
                <div className="flex items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="BuildingType"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">Residence</label>
                </div>
              </div>
              {/* MERCHANT */}
              <div>
                <h2 className="text-center text-xl font-semibold">
                  Merchant Type
                </h2>
                <div className="flex items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="MerchantType"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">Owns</label>
                </div>
                <div className="flex items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="MerchantType"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">Rent</label>
                </div>
              </div>
              {/* AREA ZONED */}
              <div>
                <h2 className="text-center text-xl font-semibold">
                  Area Zoned
                </h2>
                <div className="flex items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="MerchantType"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">Commercial</label>
                </div>
                <div className="flex items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="MerchantType"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">Residential</label>
                </div>
              </div>
              {/* SQUARE FOOTAGE */}
              <div>
                <h2 className="text-center text-xl font-semibold">
                  Square Footage
                </h2>
                <div className="flex items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="MerchantType"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">0 - 1000</label>
                </div>
                <div className="flex items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="MerchantType"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">1000+</label>
                </div>
              </div>
            </div>

            <div className="m-auto text-center">
              <CustomButtons className="m-auto my-5" btnType="default">
                Save Changes
              </CustomButtons>
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

const FinancialInformation = () => {
  const form = useForm<z.infer<typeof newItemsSchema>>({
    resolver: zodResolver(newItemsSchema),
    defaultValues: {
      Model: "",
      Id: "",
      Description: "",
      Alias: "",
      ItemType: "",
      Style: "",
      Manufacturer: "",
      ReorderQty: 0,
      SerialNumber: false,
      TakeInventory: false,
      PhysicallyShippable: false,
      HwPricing: 0,
      DeployFee: 0,
      TaxShipping: 0,
      Total: 0,
      DimensionName: "",
      DimensionWidth: "",
      DimensionHeight: "",
      DimensionLength: "",
      DimensionWeight: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newItemsSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 flex gap-2 text-start max-2xl:flex-wrap">
        <div className="flex-1 p-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              {/* Items Form */}
              <div className="space-y-1 max-lg:grid-flow-row">
                {itemsForm.map((item) =>
                  item.content ? (
                    <>
                      <div key={item.id} className="m-auto flex w-3/4 gap-4">
                        <div className="mt-2 w-1/3 content-center text-end">
                          <p className="">{item.title}</p>
                        </div>
                        <div className="w-full">
                          <SelectForm
                            control={form.control}
                            formName={item.formName}
                            label=""
                            placeholder={item.placeholder}
                            content={item.content}
                            valueKey="id"
                            displayKey="title"
                          />
                        </div>
                      </div>
                    </>
                  ) : item.type === "checkbox" ? (
                    <>
                      <div key={item.id} className="m-auto flex w-3/4 gap-4">
                        <div className="w-1/3 content-center text-end">
                          <p className=""></p>
                        </div>
                        <div className="w-full">
                          <CheckboxForm
                            control={form.control}
                            formName={item.formName}
                            label=""
                            placeholder={item.title}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div key={item.id} className="m-auto flex w-3/4 gap-4">
                        <div className="w-1/3 content-center text-end">
                          <p className="">{item.title}</p>
                        </div>
                        <div className="w-2/3">
                          <InputForm
                            control={form.control}
                            formName={item.formName}
                            label=""
                            placeholder={item.placeholder}
                          />
                        </div>
                      </div>
                    </>
                  ),
                )}
                <div className="flex w-full flex-auto">
                  <div className="m-auto mt-2 flex gap-4">
                    <InputForm
                      control={form.control}
                      formName={"HwPricing"}
                      label={"Hardware Pricing"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"DeployFee"}
                      label={"Deploy Fee"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"TaxShipping"}
                      label={"Tax and Shipping"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"Total"}
                      label={"Total"}
                      placeholder={"$"}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <div key={11} className="m-auto mt-2 flex flex-1 gap-4">
                    <div className="w-2/4 grow">
                      <InputForm
                        control={form.control}
                        formName={"DimensionName"}
                        label={"Dimension Name"}
                        placeholder={"Name"}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <InputForm
                        control={form.control}
                        formName={"DimensionLength"}
                        label={"Dimension Length"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionWidth"}
                        label={"Dimension Width"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionHeight"}
                        label={"Dimension Height"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionWeight"}
                        label={"Dimension Weight"}
                        placeholder={""}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                  Add New
                </Button>
                <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                  Copy
                </Button>
                <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="flex-1"></div>
      </section>
    </>
  );
};

const MoToQuestionaire = () => {
  const form = useForm<z.infer<typeof newRecentOrdersSchema>>({
    resolver: zodResolver(newRecentOrdersSchema),
    defaultValues: {
      FromDate: "",
      ToDate: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newRecentOrdersSchema>) => {
    console.log(value);
  };

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="mt-5 flex gap-4 text-start max-xl:flex-wrap">
            <div className="flex-auto">
              {/* CARD 1 - ORDER REPORTS */}

              <Card className="mt-4 space-y-4 p-4 shadow-md">
                <h1 className="text-xl font-medium">Order Reports</h1>
                <div className="flex w-full gap-2">
                  <div className="flex flex-1 content-center gap-2">
                    <label className="mt-1 content-center text-nowrap font-medium">
                      From Date
                    </label>
                    <div className="flex-auto content-center">
                      <DatePickerForm
                        control={form.control}
                        formName="FromDate"
                        label=""
                        placeholder="mm/dd/2024"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 content-center gap-2">
                    <label className="mt-1 content-center text-nowrap font-medium">
                      To Date
                    </label>
                    <div className="flex-auto content-center">
                      <DatePickerForm
                        control={form.control}
                        formName="ToDate"
                        label=""
                        placeholder="mm/dd/2024"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex flex-auto content-center gap-2 text-end">
                  <Button className="flex-1 bg-gradient-to-r from-[#FF3333] to-[#8F0000] text-white hover:opacity-90">
                    Reset
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                    Submit
                  </Button>
                </div>
              </Card>

              {/* CARD 2 - INVENTORY BY ITEM */}
              <Card className="mt-4 space-y-4 p-4 shadow-md">
                <h1 className="text-xl font-medium">Inventory By Item</h1>

                <div className="flex w-full gap-2">
                  <div className="m-auto flex w-full gap-4">
                    <div className="mt-2 w-1/5 content-center text-end">
                      <p className="">Model</p>
                    </div>
                    <div className="w-full">
                      <SelectForm
                        control={form.control}
                        formName="Model"
                        label=""
                        placeholder="Select a model..."
                        content={ModelSelectList}
                        valueKey="id"
                        displayKey="title"
                        disabled={false}
                        className=""
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex flex-auto content-center gap-2 text-end">
                  <Button className="flex-1 bg-gradient-to-r from-[#FF3333] to-[#8F0000] text-white hover:opacity-90">
                    Reset
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                    Submit
                  </Button>
                </div>
              </Card>

              {/* CARD 3 - OTHERS */}
              <Card className="mt-4 space-y-2 p-4 shadow-md">
                <h1 className="text-xl font-medium">Others</h1>

                <Button className="w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                  Master Equipment List
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                  Inventory Summary
                </Button>
              </Card>
            </div>

            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={equipmentData}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="brand"
              />
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

const MerchantOwner = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Model" },
    { accessorKey: "Condition", header: "Condition" },
    { accessorKey: "Serial", header: "Serial #" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Del", header: "Del." },
    { accessorKey: "Date", header: "Date" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newLookupSchema>>({
    resolver: zodResolver(newLookupSchema),
    defaultValues: {
      MID: "",
      OrderID: "",
      Serial: "",
      Model: "",
      Condition: "",
      ShelfItems: false,
    },
  });

  const onSubmit = (value: z.infer<typeof newLookupSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="text-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Processor Information */}
            <h1 className="m-auto mt-4 text-center text-xl font-bold">
              Lookup
            </h1>

            <div className="grid grid-flow-col grid-rows-3 gap-2 max-lg:grid-flow-row">
              {lookupForm.map((item) =>
                item.content ? (
                  <>
                    <div key={item.id} className="m-auto flex w-3/4 gap-4">
                      <div className="mt-2 w-1/3 content-center text-end">
                        <p className="">{item.title}</p>
                      </div>
                      <div className="w-full">
                        <SelectForm
                          control={form.control}
                          formName={item.formName}
                          label=""
                          placeholder={item.placeholder}
                          content={item.content}
                          valueKey="id"
                          displayKey="title"
                          disabled={false}
                          className=""
                        />
                      </div>
                    </div>
                  </>
                ) : item.type === "checkbox" ? (
                  <>
                    <div key={item.id} className="m-auto flex w-3/4 gap-4">
                      <div className="w-1/3 content-center text-end">
                        <p className=""></p>
                      </div>
                      <div className="w-full">
                        <CheckboxForm
                          control={form.control}
                          formName={item.formName}
                          label=""
                          placeholder={item.title}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div key={item.id} className="m-auto flex w-3/4 gap-4">
                      <div className="w-1/3 content-center text-end">
                        <p className="">{item.title}</p>
                      </div>
                      <div className="w-2/3">
                        <InputForm
                          control={form.control}
                          formName={item.formName}
                          label=""
                          placeholder={item.placeholder}
                        />
                      </div>
                    </div>
                  </>
                ),
              )}
            </div>

            <div className="text-center">
              <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                SUBMIT
              </Button>
            </div>

            <div className="grid w-full grid-cols-1 overflow-auto text-start">
              <DataTable
                columns={columns}
                data={LookupTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="Model"
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

const PricingInformation = () => {
  const form = useForm<z.infer<typeof newItemsSchema>>({
    resolver: zodResolver(newItemsSchema),
    defaultValues: {
      Model: "",
      Id: "",
      Description: "",
      Alias: "",
      ItemType: "",
      Style: "",
      Manufacturer: "",
      ReorderQty: 0,
      SerialNumber: false,
      TakeInventory: false,
      PhysicallyShippable: false,
      HwPricing: 0,
      DeployFee: 0,
      TaxShipping: 0,
      Total: 0,
      DimensionName: "",
      DimensionWidth: "",
      DimensionHeight: "",
      DimensionLength: "",
      DimensionWeight: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newItemsSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 flex gap-2 text-start max-2xl:flex-wrap">
        <div className="flex-1 p-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              {/* Items Form */}
              <div className="space-y-1 max-lg:grid-flow-row">
                {itemsForm.map((item) =>
                  item.content ? (
                    <>
                      <div key={item.id} className="m-auto flex w-3/4 gap-4">
                        <div className="mt-2 w-1/3 content-center text-end">
                          <p className="">{item.title}</p>
                        </div>
                        <div className="w-full">
                          <SelectForm
                            control={form.control}
                            formName={item.formName}
                            label=""
                            placeholder={item.placeholder}
                            content={item.content}
                            valueKey="id"
                            displayKey="title"
                            disabled={false}
                            className=""
                          />
                        </div>
                      </div>
                    </>
                  ) : item.type === "checkbox" ? (
                    <>
                      <div key={item.id} className="m-auto flex w-3/4 gap-4">
                        <div className="w-1/3 content-center text-end">
                          <p className=""></p>
                        </div>
                        <div className="w-full">
                          <CheckboxForm
                            control={form.control}
                            formName={item.formName}
                            label=""
                            placeholder={item.title}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div key={item.id} className="m-auto flex w-3/4 gap-4">
                        <div className="w-1/3 content-center text-end">
                          <p className="">{item.title}</p>
                        </div>
                        <div className="w-2/3">
                          <InputForm
                            control={form.control}
                            formName={item.formName}
                            label=""
                            placeholder={item.placeholder}
                          />
                        </div>
                      </div>
                    </>
                  ),
                )}
                <div className="flex w-full flex-auto">
                  <div className="m-auto mt-2 flex gap-4">
                    <InputForm
                      control={form.control}
                      formName={"HwPricing"}
                      label={"Hardware Pricing"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"DeployFee"}
                      label={"Deploy Fee"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"TaxShipping"}
                      label={"Tax and Shipping"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"Total"}
                      label={"Total"}
                      placeholder={"$"}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <div key={11} className="m-auto mt-2 flex flex-1 gap-4">
                    <div className="w-2/4 grow">
                      <InputForm
                        control={form.control}
                        formName={"DimensionName"}
                        label={"Dimension Name"}
                        placeholder={"Name"}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <InputForm
                        control={form.control}
                        formName={"DimensionLength"}
                        label={"Dimension Length"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionWidth"}
                        label={"Dimension Width"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionHeight"}
                        label={"Dimension Height"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionWeight"}
                        label={"Dimension Weight"}
                        placeholder={""}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                  Add New
                </Button>
                <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                  Copy
                </Button>
                <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="flex-1"></div>
      </section>
    </>
  );
};

const ProgrammingRequest = () => {
  const form = useForm<z.infer<typeof newRecentOrdersSchema>>({
    resolver: zodResolver(newRecentOrdersSchema),
    defaultValues: {
      FromDate: "",
      ToDate: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newRecentOrdersSchema>) => {
    console.log(value);
  };

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="mt-5 flex gap-4 text-start max-xl:flex-wrap">
            <div className="flex-auto">
              {/* CARD 1 - ORDER REPORTS */}

              <Card className="mt-4 space-y-4 p-4 shadow-md">
                <h1 className="text-xl font-medium">Order Reports</h1>
                <div className="flex w-full gap-2">
                  <div className="flex flex-1 content-center gap-2">
                    <label className="mt-1 content-center text-nowrap font-medium">
                      From Date
                    </label>
                    <div className="flex-auto content-center">
                      <DatePickerForm
                        control={form.control}
                        formName="FromDate"
                        label=""
                        placeholder="mm/dd/2024"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 content-center gap-2">
                    <label className="mt-1 content-center text-nowrap font-medium">
                      To Date
                    </label>
                    <div className="flex-auto content-center">
                      <DatePickerForm
                        control={form.control}
                        formName="ToDate"
                        label=""
                        placeholder="mm/dd/2024"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex flex-auto content-center gap-2 text-end">
                  <Button className="flex-1 bg-gradient-to-r from-[#FF3333] to-[#8F0000] text-white hover:opacity-90">
                    Reset
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                    Submit
                  </Button>
                </div>
              </Card>

              {/* CARD 2 - INVENTORY BY ITEM */}
              <Card className="mt-4 space-y-4 p-4 shadow-md">
                <h1 className="text-xl font-medium">Inventory By Item</h1>

                <div className="flex w-full gap-2">
                  <div className="m-auto flex w-full gap-4">
                    <div className="mt-2 w-1/5 content-center text-end">
                      <p className="">Model</p>
                    </div>
                    <div className="w-full">
                      <SelectForm
                        control={form.control}
                        formName="Model"
                        label=""
                        placeholder="Select a model..."
                        content={ModelSelectList}
                        valueKey="id"
                        displayKey="title"
                        disabled={false}
                        className=""
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex flex-auto content-center gap-2 text-end">
                  <Button className="flex-1 bg-gradient-to-r from-[#FF3333] to-[#8F0000] text-white hover:opacity-90">
                    Reset
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                    Submit
                  </Button>
                </div>
              </Card>

              {/* CARD 3 - OTHERS */}
              <Card className="mt-4 space-y-2 p-4 shadow-md">
                <h1 className="text-xl font-medium">Others</h1>

                <Button className="w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                  Master Equipment List
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                  Inventory Summary
                </Button>
              </Card>
            </div>

            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={equipmentData}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="brand"
              />
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};
export default function RenderNewFspComponents(value: string) {
  switch (value) {
    case "merchantDetail":
      return <MerchantDetail />;
    case "financialInformation":
      return <FinancialInformation />;
    case "moToQuestionaire":
      return <MoToQuestionaire />;
    case "merchantOwner":
      return <MerchantOwner />;
    case "pricingInformation":
      return <PricingInformation />;
    case "programmingRequest":
      return <ProgrammingRequest />;
  }
}
