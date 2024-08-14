import { MerchantSoftwareInstallSchema } from "@/lib/utils";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form } from "../ui/form";
import {
  SelectForm,
  InputForm,
  CheckboxForm,
  DatePickerForm,
} from "../Shared/InstantForm";
import { Button } from "@/components/ui/button";

const SoftwareInstall = () => {
  const form = useForm<z.infer<typeof MerchantSoftwareInstallSchema>>({
    resolver: zodResolver(MerchantSoftwareInstallSchema),
    defaultValues: {
      SoftwareAcctNumber: "",
      POCname: "",
      POCphone: "",
      POCemail: "",
      ISOname: "",
      ISOcontact: "",
      ISOphone: "",
      ISOemail: "",
      Dealer: "",
      DealerContact: "",
      DealerPhone: "",
      DealerEmail: "",
      ActiveServiceAgreement: false,
      POSsystem: "",
      NumberStations: 0,
      MiPointClover: false,
      HasTSLlicense: false,
      MiPointCloverQty: 0,
      MiPointIngencio: false,
      HasPMSlicense: false,
      MiPointIngencioQty: 0,
      RemoteServiceAccess: false,
      Environment: "",
      GatewayUsername: "",
      GatewayPassword: "",
      GatewayKey: "",
      SupportProvider: "",
      SupportProgram: "",
      EffectiveDate: new Date(),
      InstallationDevices: 0,
      InstallationDevicesPrice: 0,
      InstallationDevicesTotal: 0,
      MonthlyRecurringDevices: 0,
      MonthlyRecurringDevicesPrice: 0,
      MonthlyRecurringDevicesTotal: 0,
      SupportRecurringDevices: 0,
      SupportRecurringDevicesPrice: 0,
      SupportRecurringDevicesTotal: 0,
    },
  });

  const POSsystemData = [
    { id: 1, name: "Clover", value: "clover" },
    { id: 2, name: "Square", value: "square" },
  ];

  const EnvironmentData = [
    { id: 1, name: "Virtual Server", value: "virtualServer" },
    { id: 2, name: "Physical Server", value: "physicalServer" },
  ];

  const onSubmit = (value: z.infer<typeof MerchantSoftwareInstallSchema>) => {
    console.log(value);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="mb-3 text-2xl text-blue-500">Software Install</h1>

        <div className="flex size-full grow gap-3 max-xl:flex-col">
          {/* Merchant Information */}
          <div className="flex-auto rounded-md border p-2 xl:w-1/3">
            <h1 className="flex justify-center text-xl font-semibold text-blue-500">
              Merchant Information
            </h1>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-2/6 content-center text-nowrap text-end">
                Software Acct #
              </p>
              <div className="w-4/6">
                <InputForm
                  control={form.control}
                  formName="SoftwareAcctNumber"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-3 text-end">
              <Button className="w-1/3">Assign New #</Button>
            </div>
            <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
              Technical POC
            </h1>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Name
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="POCname"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Phone
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="POCphone"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Email
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="POCemail"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
              ISO Information
            </h1>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Name
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="ISOname"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Contact
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="ISOcontact"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Phone
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="ISOphone"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Email
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="ISOemail"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
              Dealer Information
            </h1>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Dealer
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="Dealer"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Contact
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="DealerContact"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Phone
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="DealerPhone"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex content-center gap-3">
              <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                Email
              </p>
              <div className="w-5/6">
                <InputForm
                  control={form.control}
                  formName="DealerEmail"
                  label=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-4 flex">
              <CheckboxForm
                control={form.control}
                formName="ActiveServiceAgreement"
                label=""
                placeholder=""
                className=""
              />
              <span className="mt-1.5">
                Merchant has active service agreement?
              </span>
            </div>
          </div>

          {/* Parent of top right section */}
          <div className="grid flex-auto grow xl:w-2/3">
            <div className="flex flex-auto flex-col">
              <div className="grid grid-cols-3 gap-3 max-2xl:grid-cols-1">
                {/* Platform Information Div */}
                <div className="col-span-2 rounded-md border p-2">
                  <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                    Platform Information
                  </h1>
                  <div className="flex gap-3">
                    <div className="w-3/4">
                      <SelectForm
                        control={form.control}
                        formName="POSsystem"
                        label="POS System/Version"
                        content={POSsystemData}
                        placeholder="Select POS System/Version"
                        valueKey="id"
                        displayKey="name"
                        disabled={false}
                        className=""
                      />
                    </div>
                    <InputForm
                      control={form.control}
                      formName="NumberStations"
                      label="# Stations"
                      placeholder=""
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex w-3/4 items-center justify-start max-xl:w-full max-xl:text-sm lg:gap-3 xl:gap-10">
                      <div className="flex">
                        <CheckboxForm
                          control={form.control}
                          formName="MiPointClover"
                          label=""
                          placeholder=""
                          className=""
                        />
                        <span className="mt-1.5">MiPoint Clover</span>
                      </div>
                      <div className="flex">
                        <CheckboxForm
                          control={form.control}
                          formName="HasTSLlicense"
                          label=""
                          placeholder=""
                          className=""
                        />
                        <span className="mt-1.5">Has TSL License</span>
                      </div>
                    </div>
                    <div className="flex content-center gap-3">
                      <p className="mt-2 w-1/3 content-center text-nowrap text-end font-semibold">
                        Qty
                      </p>
                      <div className="w-2/3">
                        <InputForm
                          control={form.control}
                          formName="MiPointCloverQty"
                          label=""
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex w-3/4 items-center justify-start max-xl:w-full max-xl:text-sm lg:gap-3 xl:gap-6">
                      <div className="flex">
                        <CheckboxForm
                          control={form.control}
                          formName="MiPointIngencio"
                          label=""
                          placeholder=""
                          className=""
                        />
                        <span className="mt-2">MiPoint Ingencio</span>
                      </div>
                      <div className="flex">
                        <CheckboxForm
                          control={form.control}
                          formName="HasPMSlicense"
                          label=""
                          placeholder=""
                          className=""
                        />
                        <span className="mt-2">Has PMS License</span>
                      </div>
                    </div>
                    <div className="flex content-center gap-3">
                      <p className="mt-2 w-1/3 content-center text-nowrap text-end font-semibold">
                        Qty
                      </p>
                      <div className="w-2/3">
                        <InputForm
                          control={form.control}
                          formName="MiPointCloverQty"
                          label=""
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div className="flex">
                      <CheckboxForm
                        control={form.control}
                        formName="RemoteServiceAccess"
                        label=""
                        placeholder=""
                        className=""
                      />
                      <span className="mt-1.5">
                        Remote Service Access Available
                      </span>
                    </div>
                    <SelectForm
                      control={form.control}
                      formName="Environment"
                      label="Environment"
                      content={EnvironmentData}
                      placeholder="Select Environment"
                      valueKey="id"
                      displayKey="name"
                      disabled={false}
                      className=""
                    />
                  </div>
                  <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                    Gateway Info
                  </h1>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex content-center gap-3">
                      <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                        Username
                      </p>
                      <div className="w-1/2">
                        <InputForm
                          control={form.control}
                          formName="GatewayUsername"
                          label=""
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="flex content-center gap-3">
                      <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                        Password
                      </p>
                      <div className="w-1/2">
                        <InputForm
                          control={form.control}
                          formName="GatewayPassword"
                          label=""
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="flex content-center gap-3">
                      <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                        Key
                      </p>
                      <div className="w-1/2">
                        <InputForm
                          control={form.control}
                          formName="GatewayKey"
                          label=""
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Quick Updates Div */}
                <div className="col-auto rounded-md border p-2 text-center">
                  <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                    Quick Updates
                  </h1>
                  <Button className="mt-14 w-11/12">
                    Update Equipment Status
                  </Button>
                  <Button className="mb-2 mt-20 w-11/12">
                    Migrate to HOLD Status
                  </Button>
                  <Button className="w-11/12">Migrate to ACTIVE Status</Button>
                  <Button className="mb-2 mt-20 w-11/12">
                    Update Billing Information
                  </Button>
                  <Button className="w-11/12">Setup Support Agreement</Button>
                </div>
              </div>
              {/* Parent of bottom right section */}
              <div className="mt-3 grid h-1/3 grid-cols-3 gap-3 max-2xl:grid-cols-1">
                {/* Support & Services Div */}
                <div className="col-span-1 grid rounded-md border p-2">
                  <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                    Support & Services
                  </h1>
                  <SelectForm
                    control={form.control}
                    formName="SupportProvider"
                    label="Support Provider"
                    content={POSsystemData}
                    placeholder="Select Support Provider"
                    valueKey="id"
                    displayKey="name"
                    disabled={false}
                    className=""
                  />
                  <SelectForm
                    control={form.control}
                    formName="SupportProgram"
                    label="Support Program"
                    content={POSsystemData}
                    placeholder="Select Support Program"
                    valueKey="id"
                    displayKey="name"
                    disabled={false}
                    className=""
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="EffectiveDate"
                    label="Effective Date"
                    placeholder="Select Effective Date"
                  />
                </div>
                {/* Current Billing Details Div */}
                <div className="col-span-2 rounded-md border p-2">
                  <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                    Current Billing Details
                  </h1>

                  <div className="flex content-center gap-3">
                    <p className="mt-8 w-1/3 content-center text-nowrap text-end">
                      Installation Charges
                    </p>
                    <div className="flex w-2/3 gap-3">
                      <InputForm
                        control={form.control}
                        formName="InstallationDevices"
                        label="# Devices"
                        placeholder=""
                      />
                      <InputForm
                        control={form.control}
                        formName="InstallationDevicesPrice"
                        label="$/Each"
                        placeholder=""
                      />
                      <InputForm
                        control={form.control}
                        formName="InstallationDevicesTotal"
                        label="Total Cost"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex content-center gap-3">
                    <p className="mt-2 w-1/3 content-center text-nowrap text-end">
                      Monthly Recurring
                    </p>
                    <div className="flex w-2/3 gap-3">
                      <InputForm
                        control={form.control}
                        formName="MonthlyRecurringDevices"
                        label=""
                        placeholder=""
                      />
                      <InputForm
                        control={form.control}
                        formName="MonthlyRecurringDevicesPrice"
                        label=""
                        placeholder=""
                      />
                      <InputForm
                        control={form.control}
                        formName="MonthlyRecurringDevicesTotal"
                        label=""
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex content-center gap-3">
                    <p className="mt-2 w-1/3 content-center text-nowrap text-end">
                      Support Recurring
                    </p>
                    <div className="flex w-2/3 gap-3">
                      <InputForm
                        control={form.control}
                        formName="SupportRecurringDevices"
                        label=""
                        placeholder=""
                      />
                      <InputForm
                        control={form.control}
                        formName="SupportRecurringDevicesPrice"
                        label=""
                        placeholder=""
                      />
                      <InputForm
                        control={form.control}
                        formName="SupportRecurringDevicesTotal"
                        label=""
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SoftwareInstall;
