"use client";
import React from 'react'
import { Card } from '../ui/card'
import { Button } from "@/components/ui/button";
import { ModelSelectList } from "@/constants";
import { Form } from "../ui/form";
import { newLoadProcessingDataSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    InputForm,
    SelectForm,
} from "../Shared/InstantForm";

const LoadProcessingData = () => {

    const form = useForm<z.infer<typeof newLoadProcessingDataSchema>>({
        resolver: zodResolver(newLoadProcessingDataSchema),
        defaultValues: {
            ProcessingPeriod: "",
            Status: "",
        },
    });

    const onSubmit = (value: z.infer<typeof newLoadProcessingDataSchema>) => {
        console.log(value);
    };

    return (
        <>
            <Card className="p-4 w-full h-fit shadow-md">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <h1 className="text-center text-nowrap text-2xl text-sky-500">Load Processing Data</h1>

                        <div className="w-full">
                            <SelectForm
                                control={form.control}
                                formName="ProcessingPeriod"
                                label="Processing Period"
                                placeholder=""
                                content={ModelSelectList}
                                valueKey='id'
                                displayKey='title'
                                disabled={false}
                                className=""
                            />
                        </div>
                        <div className="w-full">
                            <InputForm
                                control={form.control}
                                formName={"Status"}
                                label="Status"
                                placeholder={""}
                            />
                        </div>
                        <div className="text-center">
                            <Button className="justify-center px-5 gap-2 my-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                                {/* <img src={clipIcon} className="w-6 h-6"/> */}
                                <p>Import Data</p>
                            </Button>
                        </div>
                    </form>
                </Form>
            </Card>
        </>
    )
}

export default LoadProcessingData