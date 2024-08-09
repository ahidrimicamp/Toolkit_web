"use client";
import Link from 'next/link'
import {
    ColumnConfig,
    createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { adjustmentTable, agentEmailList, displayResidualsTable, ModelSelectList } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { newAdHocSearchSchema, newAdjustmentCriteriaSchema, newDisplayResidualsSchema, newRecentOrdersSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { equipmentData } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckboxForm, DatePickerForm, InputForm, SelectForm, TextAreaForm } from '@/components/Shared/InstantForm';
import { Form } from '@/components/ui/form';
import PDFReader from '@/components/pdfRenderer/PDFReader';


const page = () => {

    const form = useForm<z.infer<typeof newAdHocSearchSchema>>({
        resolver: zodResolver(newAdHocSearchSchema),
        defaultValues: {
            ReportName: "",
            MID: "",
            FromDate: "",
            ToDate: "",
            YearMonth: "",
            UseAO: false,
            SaveToC: false,
            MIDS: "",
            User: "",
            Processor: "",
            AuditType: "",
            Agent: "",
            Phrase: "",
        },
    });

    const onSubmit = (value: z.infer<typeof newAdHocSearchSchema>) => {
        console.log(value);
    };

    return (
        <>
            <section className="p-2">
                <Link href={"/admin/adHoc"}>
                    <Button className="px-10 mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                        <p className="text-pretty">
                            {"<<"} Return
                        </p>
                    </Button>
                </Link>
                <div className="flex max-2xl:flex-wrap gap-10">
                    <div className="flex-auto">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                                {/* SEARCH CRITERIA CARD */}
                                <h1 className="text-center font-medium text-xl my-5">Search Criteria</h1>

                                {/* REPORT NAME */}
                                <div className="m-auto flex w-full gap-4">
                                    <div className="w-1/3 content-center text-end mt-2">
                                        <p className="">Report Name</p>
                                    </div>
                                    <div className="w-2/3">
                                        <SelectForm
                                            control={form.control}
                                            formName={"Agent"}
                                            label=""
                                            placeholder={"Select Agent"}
                                            content={agentEmailList}
                                            valueKey='Email'
                                            displayKey='Name'
                                            disabled={false}
                                            className=""
                                        />
                                    </div>
                                </div>
                                {/* MID */}
                                <div className="m-auto flex w-full gap-4">
                                    <div className="w-1/3 content-center text-end mt-2">
                                        <p className="">MID</p>
                                    </div>
                                    <div className="w-2/3">
                                        <SelectForm
                                            control={form.control}
                                            formName={"Agent"}
                                            label=""
                                            placeholder={"Select MID"}
                                            content={agentEmailList}
                                            valueKey='Email'
                                            displayKey='Name'
                                            disabled={false}
                                            className=""
                                        />
                                    </div>
                                </div>
                                {/* FROM DATE */}
                                <div className="m-auto flex w-full gap-4">
                                    <div className="w-1/3 content-center text-end mt-2">
                                        <p className="">From Date</p>
                                    </div>
                                    <div className="content-center w-2/3 flex-auto">
                                        <DatePickerForm
                                            control={form.control}
                                            formName="ResidualDate"
                                            label=""
                                            placeholder="mm/dd/2024"
                                        />
                                    </div>
                                </div>
                                {/* TO DATE */}
                                <div className="m-auto flex w-full gap-4">
                                    <div className="w-1/3 content-center text-end mt-2">
                                        <p className="">To Date</p>
                                    </div>
                                    <div className="content-center w-2/3 flex-auto">
                                        <DatePickerForm
                                            control={form.control}
                                            formName="ResidualDate"
                                            label=""
                                            placeholder="mm/dd/2024"
                                        />
                                    </div>
                                </div>
                                {/* YEAR/MONTH */}
                                <div className="m-auto flex w-full gap-4">
                                    <div className="w-1/3 content-center text-end mt-2">
                                        <p className="">Year/Month</p>
                                    </div>
                                    <div className="w-2/3">
                                        <SelectForm
                                            control={form.control}
                                            formName={"Agent"}
                                            label=""
                                            placeholder={"Select Year/Month"}
                                            content={agentEmailList}
                                            valueKey='Email'
                                            displayKey='Name'
                                            disabled={false}
                                            className=""
                                        />
                                    </div>
                                </div>
                                <div className="flex w-2/3 justify-end m-auto gap-6">
                                    <CheckboxForm
                                        control={form.control}
                                        formName={"PayDay"}
                                        label={""}
                                        placeholder={"Use AO"}
                                    />
                                    <CheckboxForm
                                        control={form.control}
                                        formName={"PayDay"}
                                        label={""}
                                        placeholder={"Save to C:/ToolkitWeb"}
                                    />
                                </div>
                                {/* MIDS */}
                                <div className="m-auto flex w-full gap-4 content-center">
                                    <p className="w-1/3 content-center text-end">MIDS</p>
                                    <div className="w-2/3">
                                        <TextAreaForm
                                            control={form.control}
                                            formName={"Notes"}
                                            label=""
                                            placeholder="Notes..."
                                        />
                                    </div>
                                </div>
                                {/* USER */}
                                <div className="m-auto flex w-full gap-4">
                                    <div className="w-1/3 content-center text-end mt-2">
                                        <p className="">User</p>
                                    </div>
                                    <div className="w-2/3">
                                        <SelectForm
                                            control={form.control}
                                            formName={"Agent"}
                                            label=""
                                            placeholder={"Select User"}
                                            content={agentEmailList}
                                            valueKey='Email'
                                            displayKey='Name'
                                            disabled={false}
                                            className=""
                                        />
                                    </div>
                                </div>
                                {/* PROCESSOR */}
                                <div className="m-auto flex w-full gap-4">
                                    <div className="w-1/3 content-center text-end mt-2">
                                        <p className="">Processor</p>
                                    </div>
                                    <div className="w-2/3">
                                        <SelectForm
                                            control={form.control}
                                            formName={"Agent"}
                                            label=""
                                            placeholder={"Select Processor"}
                                            content={agentEmailList}
                                            valueKey='Email'
                                            displayKey='Name'
                                            disabled={false}
                                            className=""
                                        />
                                    </div>
                                </div>
                                {/* AUDIT TYPE */}
                                <div className="m-auto flex w-full gap-4">
                                    <div className="w-1/3 content-center text-end mt-2">
                                        <p className="">Audit Type</p>
                                    </div>
                                    <div className="w-2/3">
                                        <SelectForm
                                            control={form.control}
                                            formName={"Agent"}
                                            label=""
                                            placeholder={"Select Audit Type"}
                                            content={agentEmailList}
                                            valueKey='Email'
                                            displayKey='Name'
                                            disabled={false}
                                            className=""
                                        />
                                    </div>
                                </div>
                                {/* AGENT */}
                                <div className="m-auto flex w-full gap-4">
                                    <div className="w-1/3 content-center text-end mt-2">
                                        <p className="">Agent</p>
                                    </div>
                                    <div className="w-2/3">
                                        <SelectForm
                                            control={form.control}
                                            formName={"Agent"}
                                            label=""
                                            placeholder={"Select Agent"}
                                            content={agentEmailList}
                                            valueKey='Email'
                                            displayKey='Name'
                                            disabled={false}
                                            className=""
                                        />
                                    </div>
                                </div>
                                {/* PHRASE */}
                                <div className="m-auto flex w-full gap-4 content-center">
                                    <p className="w-1/3 content-center text-end">Phrase</p>
                                    <div className="w-2/3">
                                        <InputForm
                                            control={form.control}
                                            formName={"AgentID"}
                                            label=""
                                            placeholder="Enter Phrase"
                                        />
                                    </div>
                                </div>
                                <div className="text-end m-auto w-full my-3">
                                    <Button className="px-8 bg-gradient-to-r from-[#79CB6C] to-[#285C20] hover:opacity-90 text-white">
                                        Generate Excel
                                    </Button>
                                </div>



                            </form>
                        </Form>
                    </div>
                    <div className="flex-auto justify-center ">
                        <div className='ml-auto mr-0 w-full items-center justify-center'>
                            <PDFReader/>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default page