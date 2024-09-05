/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { z } from "zod";
import { newMerchantSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { InputForm } from "@/components/Shared/InstantForm";

const page = () => {
  const form = useForm<z.infer<typeof newMerchantSchema>>({
    resolver: zodResolver(newMerchantSchema),
    defaultValues: {
      MID: "",
      LegalName: "",
      DBA: "",
      Phone: "",
      Status: "",
      Approval: "",
      Filter: "",
      Processor: "",
      Fitler2: "",
      AgentID: 0,
      SalesRep: "",
      Split: 0,
      SplitName: "",
      SplitID: 0,
      LeadSource: "",
      SplitLead: 0,
      EstAnnual: 0,
      Transactions: 0,
      Filter3: "",
      Banks: "",
      WAVItAccount: 0,
      MCCCode: "",
      Notice: "",
      ChildMID: false,
      WAVitAccount: false,
      WAVitApp: false,
      NewAccountTasks: false,
      BusinessRetail: false,
      BusinessEcommerce: false,
      BusinessRestaurant: false,
      BusinessMoTo: false,
      DeployBy: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newMerchantSchema>) => {
    console.log(value);
  };
  const itemsList = [
    {
      id: 1,
      title: "Agent / Rep. Name",
      type: "input",
      value: "",
    },
    {
      id: 2,
      title: "Agent / Rep. Code",
      type: "input",
      value: "",
    },
    {
      id: 3,
      title: "Branch Name",
      type: "input",
      value: "",
    },
    {
      id: 4,
      title: "Branch Code",
      type: "input",
      value: "",
    },
    {
      id: 5,
      title: "ABA Routing #",
      type: "input",
      value: "",
    },
    {
      id: 6,
      title: "DDA Checking Act. #",
      type: "input",
      value: "",
    },
    {
      id: 7,
      title: "Federal Tax ID #",
      type: "input",
      value: "",
    },
    {
      id: 8,
      title: "Banker",
      type: "input",
      value: "",
    },
    {
      id: 9,
      title: "Banker Employee ID",
      type: "input",
      value: "",
    },
    {
      id: 10,
      title: "Division Name",
      type: "input",
      value: "",
    },
    {
      id: 11,
      title: "Division / LOB #",
      type: "input",
      value: "",
    },
    {
      id: 12,
      title: "Region Name",
      type: "input",
      value: "",
    },
    {
      id: 13,
      title: "Region #",
      type: "input",
      value: "",
    },
    {
      id: 14,
      title: "Segment Name",
      type: "input",
      value: "",
    },
    {
      id: 15,
      title: "Referral Lead #",
      type: "input",
      value: "",
    },
    {
      id: 16,
      title: "Entity",
      type: "input",
      value: "",
    },
    {
      id: 17,
      title: "Client Group",
      type: "input",
      value: "",
    },
  ];

  return (
    <>
      <section>
        <h1 className="mb-3 text-2xl text-sky-500">Bank of The West</h1>

        {/* FIRST COLUMN */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Processor Information */}
            <h1 className="m-auto text-center text-xl font-bold">
              Information
            </h1>

            <div className="grid grid-flow-row grid-cols-2 gap-2 max-lg:grid-cols-1">
              {itemsList.map((item) => {
                return (
                  <div key={item.id} className="m-auto flex w-full gap-4">
                    <div className="w-1/3 content-center text-end">
                      <p className="max-lg:text-sm">{item.title}</p>
                    </div>
                    <div className="w-2/3">
                      <InputForm
                        control={form.control}
                        formName="Filter3"
                        label=""
                        placeholder="Enter value"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </form>
        </Form>
      </section>
    </>
  );
};

export default page;
