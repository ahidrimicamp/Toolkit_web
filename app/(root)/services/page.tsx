/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Form } from "@/components/ui/form";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  InputForm,
  SelectForm,
  TextAreaForm,
} from "@/components/Shared/InstantForm";

const page = () => {
  const funderSchema = z.object({
    funderName: z.string(),
    referralAgent: z.string(),
    contactName: z.string(),
    contactPhone: z.string(),
    contactEmail: z.string(),
    address: z.string(),
    bankName: z.string(),
    routingNumber: z.string(),
    accountName: z.string(),
    fundingFreq: z.string(),
    currentStatus: z.string(),
    sendDailyEmails: z.string(),
    notes: z.string(),
  });

  const form = useForm<z.infer<typeof funderSchema>>({
    resolver: zodResolver(funderSchema),
    defaultValues: {
      funderName: "",
      referralAgent: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      address: "",
      bankName: "",
      routingNumber: "",
      accountName: "",
      fundingFreq: "",
      currentStatus: "",
      sendDailyEmails: "",
      notes: "",
    },
  });

  const onSubmit = (values: z.infer<typeof funderSchema>) => {
    console.log(values);
  };

  const formMap = [
    { id: 1, title: "Funder Name", value: "funderName" },
    { id: 2, title: "Referral Agent", value: "referralAgent" },
    { id: 3, title: "Contact Name", value: "contactName" },
    { id: 4, title: "Contact Phone", value: "contactPhone" },
    { id: 5, title: "Address", value: "address" },
    { id: 6, title: "Bank Name", value: "bankName" },
    { id: 7, title: "Routing Number", value: "routingNumber" },
    { id: 8, title: "Account Name", value: "accountName" },
    {
      id: 9,
      title: "Funding Frequency",
      value: "fundingFreq",
      data: [
        {
          id: 1,
          title: "Daily",
          value: "while",
        },
        {
          id: 2,
          title: "Once in a while",
          value: "daily",
        },
        {
          id: 3,
          title: "Once a year",
          value: "year",
        },
      ],
    },
    {
      id: 10,
      title: "Current Status",
      value: "currentStatus",
      data: [
        {
          id: 1,
          title: "Closed",
          value: "closed",
        },
        {
          id: 2,
          title: "Open",
          value: "closed",
        },
      ],
    },
    {
      id: 11,
      title: "Send Daily Emails",
      value: "sendDailyEmails",
      data: [
        {
          id: 1,
          title: "No",
          value: "no",
        },
        {
          id: 2,
          title: "Yes",
          value: "yes",
        },
      ],
    },
    { id: 12, title: "Notes", value: "notes" },
  ];
  return (
    <div className="rounded-r-sm rounded-bl-sm border px-4 py-10 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <p className="text-3xl text-blue-500">Add Funder</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {formMap.map((item) =>
                item.data ? (
                  <SelectForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                    content={item.data}
                    valueKey="id"
                    displayKey="title"
                  />
                ) : item.value === "address" || item.value === "notes" ? (
                  <TextAreaForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                  />
                ) : (
                  <InputForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                  />
                ),
              )}
            </form>
          </Form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
