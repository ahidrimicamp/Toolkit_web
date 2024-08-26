"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  accountInformationFspForm,
  billToFspForm,
  cardSalesInterForm,
  cloverOnlyInterForm,
  connectionTypeInterForm,
  dbaAddressInterForm,
  dbaAddressShipFspForm,
  dbaInformationInterForm,
  dbaLegalInfoInterForm,
  dbaSelectionFspForm,
  equipmentInformationFspForm,
  fileBuildInformationFspForm,
  flaxRateInterNorthForm,
  flexRateFeesNorthForm,
  LegalAddressInfoInterForm,
  LegalInfoInterForm,
  northBoadingFormTest,
  OwnersTable,
  salesInterForm,
  serverFspForm,
  settingsInterForm,
  shipPriorityFspForm,
  shipToFspForm,
  taxInformationInterForm,
  tieredPricingNorthForm,
  tipLineFspForm,
  wavitAppOnlyFspForm,
} from "@/constants";
import { DataTypes } from "@/types";
import React, { useState } from "react";
import { Form } from "../ui/form";
import {
  financialInformationInterSchema,
  merchantInformationInterSchema,
  merchantOwnerFspSchema,
  pricingInformationFspSchema,
  programmingRequestFspSchema,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  FormGeneration,
  InputForm,
  FormGenerationRadio,
  SwitchForm,
  NorthFormGeneration,
} from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import AddNewMerchantOwner from "./AddNewMerchantOwner";
import { Input } from "../ui/input";

const MerchantDetail = () => {
  const form = useForm<z.infer<typeof merchantInformationInterSchema>>({
    resolver: zodResolver(merchantInformationInterSchema),
    defaultValues: {
      ClientsBusinessName: "",
      Phone: "",
      CustomerServicePhone: "",
      Fax: "",
      EmailStatements: "",
      CustomerServiceEmail: "",
      AlsoPrintAndMailStatements: false,
      Street: "",
      AddressSearchBar: "",
      City: "",
      State: "",
      PostalCode: "",
      UseBusinessAddressDBA: false,
      LegalContactName: "",
      LegalContactFax: "",
      LegalContactPhone: "",
      LegalContactEmail: "",
      LegalBusinessName: "",
      LegalStartDate: new Date() || null || undefined,
      LegalBusinessWebsite: "",
      LegalAddress: "",
      LegalCity: "",
      LegalState: "",
      LegalPostalCode: "",
    },
  });

  const onSubmit = (value: z.infer<typeof merchantInformationInterSchema>) => {
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
            formFields={dbaInformationInterForm}
            gridCols={"2"}
          />
          <p className="my-2">
            {
              "NOTE: Statements are 'Summary' for Cash Discount Apps & 'Detailed' for Others."
            }
          </p>
          {/* DBA Address Section */}
          <h1 className="my-5 text-2xl font-bold text-sky-500">
            DBA Address Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={dbaAddressInterForm}
            gridCols={"2"}
          />
          {/* LEGAL CONTACT INFORMATION */}
          <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
            Legal Contact Information
          </h1>
          {/* UseBusinessAddressDBA  */}
          <SwitchForm
            control={form.control}
            formName="UseBusinessAddressDBA"
            label="Use Business Address DBA"
            className="mb-4"
          />
          <FormGeneration
            formControl={form.control}
            formFields={dbaLegalInfoInterForm}
            gridCols={"4"}
          />
          {/* LEGAL INFORMATION SECTION */}
          <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
            Legal Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={LegalInfoInterForm}
            gridCols={"2"}
          />
          <Input
            placeholder="Search here to auto-fill your address details"
            className="my-7 w-1/2"
          />
          <InputForm
            control={form.control}
            formName="LegalAddress"
            label="Legal Business Address: "
            className=""
          />
          <FormGeneration
            formControl={form.control}
            formFields={LegalAddressInfoInterForm}
            gridCols={"3"}
          />

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
  const form = useForm<z.infer<typeof financialInformationInterSchema>>({
    resolver: zodResolver(financialInformationInterSchema),
    defaultValues: {
      BankName: "",
      BankRouting: 0,
      BankAccounting: 0,
      EinSsn: "",
      SICMCC: "",
      TypeOfGoods: "",
      BusinessType: "",
      HighTicket: 0,
      AverageTicketsSales: 0,
      AnnualVisaMc: 0,
      AnnualAmex: 0,
      AnnualDiscover: 0,
      AnnualTotalSales: 0,
      EarlyTerminationFee: 0,
      CashDiscount: 0,
      Discount: 0,
      MonthlyStatementFee: 0,
      StoreFrontSwipe: 0,
      Internet: 0,
      MailOrder: 0,
      Telephone: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof financialInformationInterSchema>) => {
    console.log(value);
  };

  const [front, setFront] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0);
  const [manually, setManually] = useState<number>(0);
  // eslint-disable-next-line no-unused-vars
  const [lastModify, setlastModify] = useState<
    "front" | "interest" | "manually"
  >("front");

  const adjustValues = (
    currentField: "front" | "interest" | "manually",
    value: number,
  ) => {
    if (currentField === "front") {
      setFront(value);
    } else if (currentField === "interest") {
      setInterest(value);
    } else {
      setManually(value);
    }

    const total =
      (currentField === "front" ? value : front) +
      (currentField === "interest" ? value : interest) +
      (currentField === "manually" ? value : manually);

    if (total > 100) {
      const diff = total - 100;
      const adjustValue = value - diff;

      if (currentField === "front") {
        setFront(adjustValue);
      } else if (currentField === "interest") {
        setInterest(adjustValue);
      } else {
        setManually(adjustValue);
      }
    }

    setlastModify(currentField);
  };

  return (
    <section className="mt-4 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* BANK INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Bank Information
          </h1>
          <div className="grid grid-cols-4 items-end gap-2">
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
          {/* TAX INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Tax Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={taxInformationInterForm}
            gridCols={"2"}
          />

          {/* SALES  */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">Sales</h1>
          <div className="w-1/2">
            <FormGeneration
              formControl={form.control}
              formFields={salesInterForm}
              gridCols={"2"}
            />
          </div>
          <p className="mt-5 text-xl font-semibold">Card Sales</p>
          <FormGeneration
            formControl={form.control}
            formFields={cardSalesInterForm}
            gridCols={"4"}
          />

          {/* SETTINGS INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">Settings</h1>
          <div className="w-3/4">
            <FormGeneration
              formControl={form.control}
              formFields={settingsInterForm}
              gridCols={"4"}
            />
          </div>

          {/* SALES DISTRIBUTION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Sales Distribution
          </h1>
          <div className="m-auto mt-2 grid w-3/4 grid-cols-3 items-end gap-2">
            <InputForm
              control={form.control}
              formName="StoreFrontSwipe"
              label="Store Front / Swipe: *"
              type="number"
              placeholder="Type your bank name"
              state={front}
              setState={(value) => adjustValues("front", Number(value))}
            />
            <InputForm
              control={form.control}
              formName="Internet"
              label="Internet: *"
              type="number"
              placeholder="#"
              state={interest}
              setState={(value) => adjustValues("interest", Number(value))}
            />
            <InputForm
              control={form.control}
              formName="ManuallyKeyed"
              label="Manually Keyed: *"
              type="number"
              placeholder="#"
              state={manually}
              setState={(value) => adjustValues("manually", Number(value))}
            />
          </div>
          <div className="m-auto my-3 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700">
            <Progress value={front + interest + manually}>
              Progress: {front + interest + manually}%
            </Progress>
          </div>

          <div className="m-auto text-center">
            <CustomButtons className="m-auto my-3" btnType="default">
              Save Changes
            </CustomButtons>
          </div>
        </form>
      </Form>

      <div className="flex-1"></div>
    </section>
  );
};

const MerchantOwner = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "OwnerName", header: "Owner Name" },
    { accessorKey: "Ownership", header: "Ownership %" },
    { accessorKey: "CellNumber", header: "Cell Number (used for DocuSign)" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof merchantOwnerFspSchema>>({
    resolver: zodResolver(merchantOwnerFspSchema),
    defaultValues: {
      HasFiledForBankruptcy: false,
      Account: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof merchantOwnerFspSchema>) => {
    console.log(value);
  };

  return (
    <section className="text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* OWNERS */}
          <h1 className="mt-5 flex gap-2 text-2xl font-bold text-sky-500">
            Owners
          </h1>
          <p className="font-normal">
            * All signers must be collectively own at least 25% of the company
            to continue.
          </p>
          {/* MODAL ADD NEW MERCHANT OWNER */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className={
                  "my-5 flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90"
                }
              >
                + Add New Owner
              </Button>
            </DialogTrigger>
            <DialogContent className="2xl:[1200px] max-lg:max-w-[500px] lg:max-w-[800px]">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-semibold text-sky-500">
                  Add New Merchant Owner
                </DialogTitle>
                <AddNewMerchantOwner />
              </DialogHeader>
              <DialogDescription />
            </DialogContent>
          </Dialog>
          <div className="grid w-full grid-cols-1 overflow-auto text-start">
            <DataTable
              columns={columns}
              data={OwnersTable}
              enableSorting={true}
              enableColumnFilter={false}
              filteredBy=""
            />
          </div>

          {/* BUTTON SAVE CHANGES */}
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

const ProgrammingRequest = () => {
  const form = useForm<z.infer<typeof programmingRequestFspSchema>>({
    resolver: zodResolver(programmingRequestFspSchema),
    defaultValues: {
      SalesRepresentative: "",
      SalesPhoneNumber: "",
      FileBuildVarOnly: false,
      PosProviderName: "",
      Invoicing: false,
      InvoicingNumberRequired: false,
      QrScan: false,
      EthernetInternet: false,
      WirelessSim: false,
      NeedMenuOrInventory: false,
      HowCashDiscountApplied: "",
      BuildType: "",
      Pbx: false,
      Wavit: false,
      PinDebit: false,
      AutoClose: false,
      AutoCloseTime: "",
      TipLine: false,
      TipLineType: "",
      Server: false,
      SuggestedTipPercentages: "",
      SalesTax: 0,
      ShipTo: "",
      ShipName: "",
      ShipPriority: "",
      UseExistingAddress: "",
      ShipAddress: "",
      ShipCity: "",
      ShipState: "",
      ShipPostalCode: "",
      ShipPhone: "",
      ShipEmail: "",
      BillTo: "",
    },
  });

  const onSubmit = (value: z.infer<typeof programmingRequestFspSchema>) => {
    console.log(value);
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "quantity", header: "Quantity" },
    { accessorKey: "manufacturer", header: "Manufacturer" },
    { accessorKey: "model", header: "Model" },
  ];

  const columns = createColumns(columnsConfig);

  const [activeSwitchId, setActiveSwitchId] = useState<string | number>();
  const handleToggle = (id: string | number) => {
    console.log(id);
    setActiveSwitchId((prevId) => (prevId === id ? undefined : id));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="mt-5 text-start">
          {/* ACCOUNT INFORMATION */}
          <h1 className="my-5 flex gap-2 text-2xl font-bold text-sky-500">
            Account Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={accountInformationFspForm}
            gridCols={"3"}
          />
          <div className="my-2 grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns}
              data={equipmentInformationFspForm}
              enableSorting={true}
              enableColumnFilter={false}
              actionsColumn={false}
            />
          </div>
          <div className="mb-3 mt-10">
            <CheckboxForm
              control={form.control}
              formName="FileBuildVarOnly"
              label=""
              placeholder="File Build / VAR Only (Agent Provides Equipment, Nothing Ships)"
              className=""
            />
          </div>
          <InputForm
            control={form.control}
            formName="PosProviderName"
            label="POS Provider Name"
            placeholder=""
            className="my-3 w-1/3"
          />
          <div className="mt-3 flex gap-2 max-xl:flex-wrap">
            {/* WAVIT APP ONLY */}
            <div className="my-2 w-full rounded-md border px-4 pb-2">
              <h1 className="mt-2 gap-2 text-2xl font-bold text-sky-500">
                WAVIT APP ONLY
              </h1>
              <p className="text-xl text-sky-500">
                NOTE: Works only on PAZ A920 on TSYS or CLOVER without inventory
              </p>
              <p>(Check all that apply)</p>
              <FormGeneration
                formControl={form.control}
                formFields={wavitAppOnlyFspForm}
                gridCols={"1"}
              />
            </div>
            {/* CONNECTION TYPE */}
            <div className="my-2 w-full rounded-md border px-4 pb-2">
              <h1 className="my-2 gap-2 text-2xl font-bold text-sky-500">
                CONNECTION TYPE
              </h1>
              <FormGeneration
                formControl={form.control}
                formFields={connectionTypeInterForm}
                gridCols={"1"}
              />
            </div>
          </div>
          {/* CLOVER ONLY */}
          <div className="my-2 w-full rounded-md border px-4 pb-2">
            <h1 className="my-2 gap-2 text-2xl font-bold text-sky-500">
              (CLOVER ONLY)
            </h1>
            <CheckboxForm
              control={form.control}
              formName="NeedMenuOrInventory"
              label=""
              placeholder="Check here if the merchant need a menu or inventory"
              className=""
            />
            <p className="mt-5 text-xl text-sky-500">
              How will the cash discount be applied?
            </p>
            <FormGeneration
              formControl={form.control}
              formFields={cloverOnlyInterForm}
              gridCols={"2"}
            />
          </div>

          <div className="mt-10 flex gap-2 max-2xl:flex-wrap">
            {/* FILE BUILDING INFORMATION */}
            <div className="w-full">
              <h2 className="gap-2 text-xl font-semibold">
                File Build Information
              </h2>
              <FormGenerationRadio
                formControl={form.control}
                formFields={fileBuildInformationFspForm}
                className={"w-full"}
              />
              <CheckboxForm
                control={form.control}
                formName="Pbx"
                label=""
                placeholder="PBX"
                className=""
              />
              <CheckboxForm
                control={form.control}
                formName="Wavit"
                label=""
                placeholder="WAVit"
                className=""
              />
              <CheckboxForm
                control={form.control}
                formName="PinDebit"
                label=""
                placeholder="Pin Debit"
                className=""
              />
              {/* Auto Close */}
              <div className="flex items-center gap-2">
                <CheckboxForm
                  control={form.control}
                  formName="AutoClose"
                  label=""
                  placeholder="Auto Close"
                  className=""
                />
                <p className="mt-3 px-2 text-sm">
                  If Auto Close checked, What Time?
                </p>
                <InputForm
                  control={form.control}
                  formName="AutoCloseTime"
                  label=""
                  placeholder="Time"
                  className=""
                />
              </div>
              {/* Tip Line */}
              <div className="flex items-center gap-2">
                <CheckboxForm
                  control={form.control}
                  formName="TipLine"
                  label=""
                  placeholder="Tip Line"
                  className="text-nowrap"
                />
                <p className="mt-3 text-nowrap px-2 text-sm">
                  If tip line checked, choose one:
                </p>
                <FormGenerationRadio
                  formControl={form.control}
                  formFields={tipLineFspForm}
                  className={"w-full"}
                />
              </div>
              {/* SERVER */}
              <div className="flex items-center gap-2">
                <p className="mt-3 px-7">Server:</p>
                <FormGenerationRadio
                  formControl={form.control}
                  formFields={serverFspForm}
                  className={"w-full"}
                />
              </div>
            </div>
            {/* Suggested Tip Percentages */}
            <div className="w-full">
              <div className="flex gap-2">
                <div className="flex-auto">
                  <InputForm
                    control={form.control}
                    formName="SuggestedTipPercentages"
                    label="Suggested tip percentages:"
                    placeholder="#"
                    className="flex-1"
                  />
                </div>
                <div className="flex-auto">
                  <InputForm
                    control={form.control}
                    formName="SalesTax"
                    label="Sales Tax %:"
                    placeholder="#"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* SHIPPING INFORMATION */}
          <h1 className="mb-2 mt-5 gap-2 text-2xl font-bold text-sky-500">
            Shipping Information
          </h1>
          <p className="mt-4">Ship To:</p>
          <FormGenerationRadio
            formControl={form.control}
            formFields={shipToFspForm}
            className={"w-full"}
          />
          <div className="flex gap-10">
            <div className="flex-auto">
              <InputForm
                control={form.control}
                formName="ShipName"
                label="Name: *"
                placeholder="Name"
                className=""
              />
            </div>
            <div className="flex-auto content-end">
              <FormGeneration
                formControl={form.control}
                formFields={shipPriorityFspForm}
                gridCols={"6"}
              />
            </div>
          </div>
          {/* DBA Address Selection */}
          <div className="my-5 flex justify-center gap-6 max-xl:block max-xl:space-y-2">
            {dbaSelectionFspForm.map((item) => (
              <SwitchForm
                key={item.id}
                control={form.control}
                formName={item.formName}
                label={item.title}
                id={item.id}
                isActive={activeSwitchId === item.id}
                onToggle={handleToggle}
              />
            ))}
          </div>
          <Input
            name="Search Address"
            title="Search Address"
            placeholder="Search here to auto-fill your address details"
            className="my-2 w-1/2"
          />
          <FormGeneration
            formControl={form.control}
            formFields={dbaAddressShipFspForm}
            gridCols={"2"}
          />
        </div>
        {/* Billing Information */}
        <h1 className="mb-2 mt-5 gap-2 text-start text-2xl font-bold text-sky-500">
          Billing Information
        </h1>
        <p className="text-start">Bill To:</p>
        <FormGenerationRadio
          formControl={form.control}
          formFields={billToFspForm}
          className="w-full"
        />
        <div className="flex justify-start gap-2">
          <Button className="my-5">View Bank ACH</Button>
          <Button className="my-5">View CC ACH</Button>
        </div>
        {/* SAVE CHANGES BUTTON */}
        <div className="m-auto text-center">
          <CustomButtons className="m-auto my-5" btnType="default">
            Save Changes
          </CustomButtons>
        </div>
      </form>
    </Form>
  );
};

const NorthInformation = () => {
  const form = useForm<z.infer<typeof pricingInformationFspSchema>>({
    resolver: zodResolver(pricingInformationFspSchema),
    defaultValues: {
      PassTrueInterchange: false,
      PassDuesAndAssesments: "",
      PricingType: "",
      CreditQual: 0,
      MidCreditQual: 0,
      NonCreditQual: 0,
      NonPinDebitNonQual: 0,
      NonPinDebitMidQual: 0,
      NonPinDebitNonQual2: 0,
      AmexCreditQual: 0,
      AmexMidCreditQual: 0,
      AmexNonCreditQual: 0,
      PayPalDCFee: 0,
      GrossNet: "",
      ViMcDiscRate: 0,
      ViMcdiscNonPinDebitRate: 0,
      AmexDCRate: 0,
      PaypalDCRate: 0,
      DcRate: 0,
      UseDefaultRate: false,
      DefaultRate: 3.3816,
      ViMcDiscFee: 0,
      ViMcDiscNonPinDebitDCRate: 0,
      AmexDcRate2: 0,
      PayPalDcRate2: 0,
      SwipedRate: 0,
      NonSwipedRate: 0,
      PinDebit: false,
      PinDebitDcRate: 0,
      PinDebitAuthRate: 0,
      DailyMonthly: "",
      PciFrequency: "",
      Audio: "",
      AuthrizationFee: 0,
      EbtCashItemFee: 0,
      StatementFee: 0,
      MonthlyMinimumFee: 0,
      PciFee: 0,
      AddressVerification: 0,
      EftFoodItemFee: 0,
      CustomerServiceFee: 0,
      TinInvalidFee: 0,
      VoiceAuthorization: 0,
      ReturnedTransaction: 0,
      OnlineReporting: 0,
      AchRejectFee: 0,
      ApplicationFee: 0,
      AudioResponse: 0,
      RegulatoryProductFee: 0,
      ChargebackFee: 0,
      EarlyTerminationFee: 0,
      VoiceAddressVerification: 0,
      WirelessFee: 0,
      RetrievalFee: 0,
      MerchantFee: 0,
      BatchHeaderFee: 0,
      SoftwareFee: 0,
      PciNonComplianceFee: 0,
      SalesTrasactionFee: 0,
      EquipmentFee: 0,
      OtherFeeDescription: "",
      OtherFee: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof pricingInformationFspSchema>) => {
    console.log(value);
  };

  return (
    <section className="mt-4 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* NORTH BOARDING */}
          <h1 className="mt-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
            North Boarding
          </h1>
          {/* Location and distribuition */}
          <h1 className="mt-5 flex gap-2 text-2xl font-semibold text-sky-500">
            Location and Distribution (Additional Credit Check)
          </h1>
          <div className="my-2 flex gap-10">
            <CheckboxForm
              control={form.control}
              formName="VisitNotRequired"
              label=""
              placeholder="Visit Not Required (Lic. Professional)"
              className=""
            />
          </div>
          {/* GENERATION OF THE WHOLE NORTH FORM */}
          <NorthFormGeneration
            formControl={form.control}
            formFields={northBoadingFormTest}
            gridCols={"3"}
          />

          <div className="my-2 border p-4">
            {/* FLAT RATE */}
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              Flat Rate
            </h1>
            <div className="grid grid-cols-3 items-end gap-2">
              {flaxRateInterNorthForm.map((item) => (
                <div key={item.id}>
                  {item.type ? (
                    <InputForm
                      control={form.control}
                      formName={item.formName}
                      label={item.title}
                      placeholder={item.placeholder}
                    />
                  ) : (
                    <p className="mb-2 pr-4 text-end">{item.title}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="my-2 border p-4">
            {/* FLAT RATE FEES */}
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              Flat Rate Fees
            </h1>
            <div className="grid grid-cols-3 items-end gap-2">
              {flexRateFeesNorthForm.map((item) => (
                <InputForm
                  control={form.control}
                  formName={item.formName}
                  label={item.title}
                  placeholder={item.placeholder}
                  key={item.id}
                />
              ))}
            </div>
          </div>
          <div className="my-2 border p-4">
            {/* TIERED PRICING */}
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              Tiered Pricing:
            </h1>
            <div className="grid grid-cols-3 items-end gap-2">
              {tieredPricingNorthForm.map((item) => (
                <div key={item.id}>
                  {item.type ? (
                    <InputForm
                      control={form.control}
                      formName={item.formName}
                      label={item.title}
                      placeholder={item.placeholder}
                    />
                  ) : (
                    <p className="mb-2 pr-4 text-end">{item.title}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* BUTTON SAVE CHANGES */}
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

export default function RenderNorthInterchangeComponents(value: string) {
  switch (value) {
    case "merchantDetail":
      return <MerchantDetail />;
    case "financialInformation":
      return <FinancialInformation />;
    case "merchantOwner":
      return <MerchantOwner />;
    case "programmingRequest":
      return <ProgrammingRequest />;
    case "northDetails":
      return <NorthInformation />;
  }
}
