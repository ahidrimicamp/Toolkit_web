"use client";
import {
    ColumnConfig,
    createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { agentData } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import AgentResidualsContent from "./AgentResidualsContent";
import { Form } from "../ui/form";
import { AgentEquipmentSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    CheckboxForm,
    DatePickerForm,
    InputForm,
    SelectForm,
    TextAreaForm,
} from "../Shared/InstantForm";
import { documentsTable, agentAdjustments, agentEmailList, reportList1 } from "@/constants";

const AgentReports = () => {

    const formReport = useForm<z.infer<typeof AgentEquipmentSchema>>({
        resolver: zodResolver(AgentEquipmentSchema),
        defaultValues: {
            copyFromContactInfo: false,
            noShippingEmails: false,
            coCard: false,
            markClosed: false,
            shipPhone: "",
            shipExt: "",
            shippingEmail: "",
            shippingServiceEmail: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
            cellPhone: ""
        },
    });

    const onSubmit = (values: z.infer<typeof AgentEquipmentSchema>) => {
        console.log(values);
    };


    return (
        <>
            <section className="w-full">
                <h1 className='text-2xl text-sky-500 mb-3 '>Parameters</h1>

                <Form {...formReport}>
                    <form onSubmit={formReport.handleSubmit(onSubmit)} className="space-y-2">
                        <div className="flex gap-4 content-center">
                            <Checkbox
                                className="mt-2 self-center flex-none" />
                            <span className="flex-1 text-sm self-center pt-2">
                                Sys/Prin
                            </span>
                            <div className="flex-1">
                                <SelectForm
                                    control={formReport.control}
                                    formName="SalesRep"
                                    label=""
                                    content={reportList1}
                                    placeholder="Select an item.."
                                    valueKey={"id"}
                                    displayKey={"title"}
                                    disabled={false}
                                    className=''
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 content-center w-full">
                            <Checkbox
                                className="mt-2 self-center flex-none" />
                            <span className="flex-1 text-sm self-center pt-2">
                                Month to View
                            </span>
                            <div className="flex-1">
                                <DatePickerForm
                                    control={formReport.control}
                                    formName="Approval"
                                    label=""
                                    placeholder="mm/dd/2024"
                                />
                            </div>
                        </div>
                    </form>
                </Form>
            </section >
        </>
    )
}

export default AgentReports