"use client";
import { Button } from "@/components/ui/button";
import { firstDataOmahaForm, thirdPartyForm } from "@/constants";
import React from "react";
import { Form } from "../ui/form";
import { newFirstDataOmahaSchema, newThirdPartyProcessorsSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  DatePickerForm,
  InputForm,
  SelectForm,
} from "../Shared/InstantForm";

const FirstDataOmaha = () => {

  const form = useForm<z.infer<typeof newFirstDataOmahaSchema>>({
    resolver: zodResolver(newFirstDataOmahaSchema),
    defaultValues: {
      ResidualDate: "",
      CheckCalculation: false,
      NutraChargeBacks: false,
      DoNotQueryZeroRecords: false,
      CalculateInitialPassOnly: false,
      SkipSysPrins: false,
      From: "",
      To: "",
      CalculateIndividualMID: "",
      Status: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newFirstDataOmahaSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="text-start flex-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Processor Information */}
            <h1 className="m-auto text-center mt-4 text-xl font-bold">
              First Data Omaha
            </h1>

            <div className="gap-2 w-3/5 m-auto space-y-2">
              {firstDataOmahaForm.map((item) =>
                item.type == 'checkbox' ? (
                  <>
                    <div key={item.id} className="m-auto flex w-full gap-4">
                      <CheckboxForm
                        control={form.control}
                        formName={item.formName}
                        label={""}
                        placeholder={item.placeholder}
                      />
                    </div>
                  </>
                ) : item.type == 'date' ? (
                  <>
                    <div className="content-center flex-auto">
                      <DatePickerForm
                        control={form.control}
                        formName="FromDate"
                        label={item.title}
                        placeholder="mm/dd/2024"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div key={item.id} className="w-full gap-4">
                      <InputForm
                        control={form.control}
                        formName={item.formName}
                        label={item.title}
                        placeholder={item.placeholder}
                      />
                    </div>
                  </>
                ),
              )}
              <div className="text-end">
                <Button className="px-10 my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  FDO PASO Single
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </section>
    </>
  )
}


export default FirstDataOmaha