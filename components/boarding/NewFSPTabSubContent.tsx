"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  acceptingVisaMcDiscoverFspForm,
  americaExpressVolumeFspForm,
  bankingInformationFspForm,
  cardTypesNotToAcceptFspForm,
  dbaAddressFspForm,
  dbaInformationFspForm,
  dbaLegalInformationFspForm,
  dbaTaxInformationFspForm,
  equipmentData,
  hasBeenTerminatedFspForm,
  independentServiceFspForm,
  itemsForm,
  lookupForm,
  LookupTable,
  ModelSelectList,
  returnPolicyFspForm,
  seasonalMerchantFspForm,
  seasonalMonthsFspForm,
  serviceRequestedFspForm,
  usesFulfillHouseFspForm,
} from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Form } from "../ui/form";
import {
  financialInformationFspSchema,
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
  FormGenerationGrid3Cols,
  InputForm,
  SelectForm,
  YesNoFormGeneration,
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
          <div className="grid w-3/6 grid-cols-2 gap-0 max-xl:w-full">
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
              <h2 className="text-center text-xl font-semibold">Area Zoned</h2>
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
  );
};

const FinancialInformation = () => {
  const form = useForm<z.infer<typeof financialInformationFspSchema>>({
    resolver: zodResolver(financialInformationFspSchema),
    defaultValues: {
      CheckingSavings: "",
      BankName: "",
      BankRouting: "",
      BankAccounting: "",
      // Sales
      AcceptingVisaMcDiscover: "",
      hasBeenTerminated: "",
      Reason: "",
      // Settings
      StoreFrontSwipe: 0,
      Internet: 0,
      ManuallyKeyed: 0,
      // SERVICE REQUESTED
      VisaMcAvgTransaction: "",
      VisaMcHighestTransaction: "",
      VisaMcGrossMoSales: "",
      DiscoverAvgTransaction: "",
      DiscoverHighestTransaction: "",
      DiscoverGrossMoSales: "",
      AmexOptBlueAvgTransaction: "",
      AmexOptBlueHighestTransaction: "",
      AmexOptBlueGrossMoSales: "",
      // AMERICAN EXPRESS VOLUME ? 1,000,000 ANNUALLY?
      AmericaExpressVolume: "",
      AmericanExpressVolumeAccount: "",
      // DISCOVER RETAINED
      DiscoverAccount: "",
      Visa: false,
      Mastercard: false,
      AmericanExpress: false,
      Discover: false,
      PayPal: false,
      EBT: false,
      CashBenefit: false,
      FnsAccount: 0,
      // SEASONAL MERCHANT
      SeasonalMerchant: false,
      January: false,
      February: false,
      March: false,
      April: false,
      May: false,
      June: false,
      July: false,
      August: false,
      September: false,
      October: false,
      November: false,
      December: false,
      // DOES THE MERCHANT USE AN INDEPENDENT SERVICE THAT
      // STORES, MAINTAINS OR TRANSMITS CARDHOLDER INFO?
      IndependentService: false,
      IndependentServiceName: "",
      IndependentServicePhone: "",
      // DOES MERCHANT USE A FULFILLMENT HOUSE TO FULFILL PRODUCT?
      UsesFulfillHouse: false,
      FulfillHouseName: "",
      FulfillHousePhone: "",
      // GENERAL SETTINGS
      OptOut: false,
      // RETURN POLICY
      ReturnPolicy: "",
      PolicyDescription: "",
    },
  });

  const onSubmit = (value: z.infer<typeof financialInformationFspSchema>) => {
    console.log(value);
  };

  const percentage = "82%";
  const inlineStyles = {
    width: `${percentage}`,
  };
  
  return (
    <section className="mt-4 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* BANK INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Bank Information
          </h1>
          <YesNoFormGeneration
            formControl={form.control}
            formFields={bankingInformationFspForm}
          />
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2">
              <InputForm
                control={form.control}
                formName="BankName"
                label="Bank Name: *"
                placeholder="Type your bank name"
                className=""
              />
            </div>
            <InputForm
              control={form.control}
              formName="BankRouting"
              label="Bank Routing #: *"
              placeholder="#"
              className="col-auto"
            />
            <InputForm
              control={form.control}
              formName="BankAccounting"
              label="Bank Accounting #: *"
              placeholder="#"
              className="col-auto"
            />
          </div>
          {/* SALES INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">Sales</h1>
          <p className="mt-5">
            Currently Accepting Visa/mastercard/Discover/AMEX?
          </p>
          <YesNoFormGeneration
            formControl={form.control}
            formFields={acceptingVisaMcDiscoverFspForm}
          />
          <p className="mt-5">
            Has merchant/owner/prioncipals ever been terminated from accepting
            payment cards?
          </p>
          <YesNoFormGeneration
            formControl={form.control}
            formFields={hasBeenTerminatedFspForm}
          />

          <InputForm
            control={form.control}
            formName="Reason"
            label="Reason:"
            placeholder="Type your reason."
            className="w-1/2"
          />
          {/* SETTINGS INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">Settings</h1>
          <p className="my-3">
            Sales Distribution - Fil the sales distribution of each category to
            add up to 100
          </p>
          <div className="m-auto grid w-3/4 grid-cols-3 items-end gap-2 max-xl:w-full">
            <InputForm
              control={form.control}
              formName="StoreFrontSwipe"
              label="Store Front / Swipe: *"
              type="number"
              placeholder="%"
              className=""
            />
            <InputForm
              control={form.control}
              formName="Internet"
              label="Internet: *"
              type="number"
              placeholder="%"
              className=""
            />
            <InputForm
              control={form.control}
              formName="ManuallyKeyed"
              label="Manually Keyed: *"
              type="number"
              placeholder="%"
              className=""
            />
          </div>
          <div className="m-auto my-3 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              id="progress"
              className="h-8 content-center rounded-full bg-sky-700 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
              style={inlineStyles}
            >
              <p className="text-xl">{percentage}</p>
            </div>
          </div>

          {/* SERVICE REQUESTED */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Service Requested
          </h1>
          <FormGenerationGrid3Cols
            formControl={form.control}
            formFields={serviceRequestedFspForm}
          />

          {/* AMERICAN EXPRESS VOLUME */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            American Express Volume {">"} $1,000,000 Annually?
          </h1>
          <YesNoFormGeneration
            formControl={form.control}
            formFields={americaExpressVolumeFspForm}
          />
          <InputForm
            control={form.control}
            formName="AmericanExpressVolumeAccount"
            label="Account #: *"
            placeholder="#"
            className="w-1/2"
          />
          {/* DISCOVER RETAINED / CARD TYPES */}
          <div className="grid grid-cols-2 gap-2 max-xl:grid-cols-1">
            <div className="col-span-1">
              <h1 className="mt-5 text-2xl font-bold text-sky-500">
                Discover Retained
              </h1>
              <InputForm
                control={form.control}
                formName="DiscoverAccount"
                label="Account #: *"
                placeholder="#"
                className=""
              />
            </div>
            <div className="col-span-1">
              <h1 className="mt-5 text-2xl font-bold text-sky-500">
                Card Types NOT to Accept
              </h1>
              <div className="grid grid-cols-3">
                {cardTypesNotToAcceptFspForm.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex w-full items-center gap-2"
                    >
                      <InputForm
                        control={form.control}
                        formName={item.formName}
                        label=""
                        type="checkbox"
                        className="ml-4 w-fit"
                      />
                      <label className="mt-2">{item.title}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* EBT / CASH BENEFIT  */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">--</h1>
          <div className="flex w-full items-center gap-2">
            <InputForm
              control={form.control}
              formName="EBT"
              label=""
              type="checkbox"
              className="w-fit"
            />
            <label className="mt-2">EBT</label>
          </div>
          <div className="mb-3 flex w-full items-center gap-2">
            <InputForm
              control={form.control}
              formName="CashBenefit"
              label=""
              type="checkbox"
              className="w-fit"
            />
            <label className="mt-2">Cash Benefit</label>
          </div>
          <InputForm
            control={form.control}
            formName="FnsAccount"
            label="FNS Account #: (if exists, 7 digit required)"
            placeholder="#"
            className="w-1/2"
          />
          {/* SEASONAL MERCHANT  */}
          <div className="flex w-full gap-2">
            <div className="flex-1">
              <h1 className="mt-5 text-2xl font-bold text-sky-500">
                Seasonal Merchant
              </h1>
              <YesNoFormGeneration
                formControl={form.control}
                formFields={seasonalMerchantFspForm}
              />
              <p>If Yes, indicate which months:</p>
              <div className="grid grid-flow-col grid-rows-4">
                {seasonalMonthsFspForm.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex w-full items-center gap-2"
                    >
                      <InputForm
                        control={form.control}
                        formName={item.formName}
                        label=""
                        type="checkbox"
                        className="ml-4 w-fit"
                      />
                      <label className="mt-2">{item.formName}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-1">
              <h1 className="mt-5 text-2xl font-bold text-sky-500">
                Does mercahnt use an independent service that stores, maintains
                or transmits cardholder information?
              </h1>
              <YesNoFormGeneration
                formControl={form.control}
                formFields={independentServiceFspForm}
              />
              <InputForm
                control={form.control}
                formName="IndependentServiceName"
                label="Name:"
                placeholder="Enter the name"
                className="w-full"
              />
              <InputForm
                control={form.control}
                formName="IndependentServicePhone"
                label="Phone:"
                placeholder="(___) ___-_____"
                className="w-full"
              />
            </div>
          </div>
          {/* DOES MERCHANT USE A FULFILLMENT HOUSE  */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Does Merchant use a fulfillment house to fulfill product?
          </h1>
          <YesNoFormGeneration
            formControl={form.control}
            formFields={usesFulfillHouseFspForm}
          />
          <InputForm
            control={form.control}
            formName="FulfillHouseName"
            label="Name:"
            placeholder="Enter the name"
            className="w-1/2"
          />
          <InputForm
            control={form.control}
            formName="FulfillHousePhone"
            label="Phone:"
            placeholder="(___) ___-_____"
            className="w-1/2"
          />
          {/* GENERAL SETTINGS  */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            General Settings
          </h1>
          <div className="flex w-1/2 items-center gap-2">
            <InputForm
              control={form.control}
              formName=""
              label=""
              type="checkbox"
              className="ml-4 w-fit"
            />
            <label className="mt-2">
              Opt Out (by checking this box, Merchant will not receive future
              commercial marketing communications from AmEx)
            </label>
          </div>
          {/* RETURN POLICY  */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Return Policy
          </h1>
          <div className="grid w-1/2 grid-cols-3">
            {returnPolicyFspForm.map((item) => {
              return (
                <div key={item.id} className="flex w-full items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName="ReturnPolicy"
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">{item.title}</label>
                </div>
              );
            })}
            <InputForm
              control={form.control}
              formName="PolicyDescription"
              label=""
              placeholder="Enter the name"
              className="w-full"
            />
          </div>
        </form>
      </Form>

      <div className="flex-1"></div>
    </section>
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
