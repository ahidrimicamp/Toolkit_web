"use client";
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { agentEmailList } from "@/constants";
import React from "react";
import { newAddNewUserSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckboxForm, InputForm, SelectForm } from '@/components/Shared/InstantForm';
import { Form } from '@/components/ui/form';

const page = () => {

  const form = useForm<z.infer<typeof newAddNewUserSchema>>({
    resolver: zodResolver(newAddNewUserSchema),
    defaultValues: {
      UserId: "",
      Username: "",
      Email: "",
      Extension: "",
      UserStatus: "",
      ShowRingCentral: false,
      EnableDarkMode: false,
    },
  });

  const onSubmit = (value: z.infer<typeof newAddNewUserSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="p-2">
        <div className="flex justify-between">
          <h1 className="text-2xl text-sky-500">Add New User</h1>
          <Link href={"/admin/userAdmin"}>
            <Button className="px-10 mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
              <p className="text-pretty">
                {"<<"} Return
              </p>
            </Button>
          </Link>
        </div>
        <div className="w-2/4 m-auto">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              {/* SEARCH CRITERIA CARD */}
              <h2 className="text-center font-medium text-xl my-5">User Info</h2>

              {/* USER ID */}
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">User ID</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"UserId"}
                    label=""
                    placeholder="ID"
                  />
                </div>
              </div>
              {/* USER NAME */}
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">User Name</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Username"}
                    label=""
                    placeholder="Enter user name"
                  />
                </div>
              </div>
              {/* EMAIL */}
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">Email</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Email"}
                    label=""
                    placeholder="micamp@example.com"
                  />
                </div>
              </div>
              {/* EXTENSION */}
              <div className="m-auto flex w-full gap-4 content-center">
                <p className="w-1/3 content-center text-end">Extension</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Extension"}
                    label=""
                    placeholder="Enter Extension"
                  />
                </div>
              </div>
              {/* USER STATUS */}
              <div className="m-auto flex w-full gap-4">
                <div className="w-1/3 content-center text-end mt-2">
                  <p className="">User Status</p>
                </div>
                <div className="w-2/3">
                  <SelectForm
                    control={form.control}
                    formName={"UserStatus"}
                    label=""
                    placeholder={"Select User Status"}
                    content={agentEmailList}
                    valueKey='Email'
                    displayKey='Name'
                    disabled={false}
                    className=""
                  />
                </div>
              </div>

              <h2 className="text-center font-medium text-xl my-5">Settings</h2>

              <div className="m-auto w-2/4 text-start">
                <CheckboxForm
                  control={form.control}
                  formName="ShowRingCentral"
                  label=""
                  placeholder="Show Ring Central Interface"
                  className="content-center items-center align-middle mt-3"
                />
                <CheckboxForm
                  control={form.control}
                  formName="EnableDarkMode"
                  label=""
                  placeholder="Enable Dark Mode"
                  className="content-center items-center align-middle mt-3"
                />
              </div>
              <div className="text-end m-auto w-full my-3">
                <Button className="px-8 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Save New User
                </Button>
              </div>

            </form>
          </Form>
        </div>
      </section>

    </>
  )
}

export default page