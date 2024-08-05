import React from 'react'
import { Form } from '../ui/form'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { newRecentOrdersSchema } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePickerForm } from '../Shared/InstantForm';
import { Button } from '../ui/button';
import { equipmentData, RecentOrderTable } from '@/constants';
import DataTable from '../Shared/DataTable/DataTable';
import { ColumnConfig, createColumns } from '../Shared/DataTable/Columns';
import { DataTypes } from '@/types';

const RecentOrdersSection = () => {

    const columnsConfig: ColumnConfig<DataTypes>[] = [
        { accessorKey: "DBA", header: "DBA" },
        { accessorKey: "Date", header: "Date" },
        { accessorKey: "Status", header: "Status" },
        { accessorKey: "MID", header: "MID" },
        { accessorKey: "Order", header: "Order #" },
        { accessorKey: "Agent", header: "Agent" },
        { accessorKey: "Tracking", header: "Tracking" },
    ];

    const columns = createColumns(columnsConfig);

    const form = useForm<z.infer<typeof newRecentOrdersSchema>>({
        resolver: zodResolver(newRecentOrdersSchema),
        defaultValues: {
            FromDate: "",
            ToDate: ""
        },
    });

    const onSubmit = (value: z.infer<typeof newRecentOrdersSchema>) => {
        console.log(value);
    };

    return (
        <>
            <section className='overflow-auto'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">
                        <div className="flex justify-around max-xl:flex-wrap gap-4">
                            <div className="flex flex-auto gap-2">
                                <div className="flex gap-2 content-center">
                                    <label className="text-nowrap content-center font-medium mt-1">From Date</label>
                                    <div className="content-center">
                                        <DatePickerForm
                                            control={form.control}
                                            formName="FromDate"
                                            label=""
                                            placeholder="mm/dd/2024"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-2 content-center">
                                    <label className="text-nowrap content-center font-medium mt-1">To Date</label>
                                    <div className="content-center">
                                        <DatePickerForm
                                            control={form.control}
                                            formName="ToDate"
                                            label=""
                                            placeholder="mm/dd/2024"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-auto content-center mt-2 text-end">
                                <Button className="px-10 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                                    + Add New
                                </Button>
                            </div>
                        </div>
                        <div className='grid overflow-auto'>
                            <DataTable
                                columns={columns}
                                data={RecentOrderTable}
                                enableSorting={true}
                                enableColumnFilter={true}
                                filteredBy="DBA"
                            />
                        </div>

                    </form>
                </Form>
            </section>
        </>
    )
}

export default RecentOrdersSection