"use client";
import React from "react";
import { Card } from "../ui/card";
import { Button } from "@/components/ui/button";
import { ModelSelectList } from "@/constants";
import { Form } from "../ui/form";
import { newRingCentralUtilitySchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputForm, SelectForm } from "../Shared/InstantForm";

const RingCentralImport = () => {
  const form = useForm<z.infer<typeof newRingCentralUtilitySchema>>({
    resolver: zodResolver(newRingCentralUtilitySchema),
    defaultValues: {
      DataSource: "",
      Status: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newRingCentralUtilitySchema>) => {
    console.log(value);
  };

  return (
    <>
      <Card className="h-fit w-full p-4 shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <h1 className="text-nowrap text-center text-2xl text-sky-500">
              Ring Central Import Utility
            </h1>
            <div className="w-full">
              <SelectForm
                control={form.control}
                formName="DataSource"
                label="Data Source"
                placeholder="Select a data source.."
                content={ModelSelectList}
                valueKey="id"
                displayKey="title"
                disabled={false}
                className=""
              />
            </div>
            <div className="w-full">
              <InputForm
                control={form.control}
                formName={""}
                label="Status"
                placeholder={""}
              />
            </div>
            <div className="text-center">
              <Button className="my-2 justify-center gap-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-5 text-white hover:opacity-90">
                {/* <img src={clipIcon} className="w-6 h-6"/> */}
                <p>Choose File</p>
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default RingCentralImport;
