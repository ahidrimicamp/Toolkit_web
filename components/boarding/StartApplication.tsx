import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const StartApplication = () => {

    const linksApplication = [
        {
            Title: "MiCamp FSP MPA",
            Route: "/boarding/mBoarding/newFSP",
            RouteTraining: "#",
        },
        {
            Title: "First Data NORTH Interchange 2502-2",
            Route: "/boarding/mBoarding/newInterchange",
            RouteTraining: "#",
        },
        {
            Title: "First Data NORTH WAVit 2502-2",
            Route: "/boarding/mBoarding/newWAVit",
            RouteTraining: "#",
        },
        {
            Title: "OMAHA Processing Application and Agreement",
            Route: "/boarding/mBoarding/newOMAHA",
            RouteTraining: "#",
        },
    ]

    return (
        <>
            <section>
                <h2 className="text-xl font-semibold my-7 text-center">Start a New Application</h2>

                {linksApplication.map((item) => {
                    return (
                        <>
                            <div className="flex bg-gray-100 dark:bg-black w-full justify-between p-2 px-10 rounded-lg mb-4">
                                <h3 className="text-lg max-lg:text-sm content-center font-semibold">{item.Title}</h3>
                                <div className="flex gap-10">
                                    <Link href={item.RouteTraining}>
                                        <Button className="text-white" variant={"success"}>
                                            Training
                                        </Button>
                                    </Link>
                                    <Link href={item.Route}>
                                        <Button className="text-white" variant={"submit"}>
                                            + Add New
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default StartApplication





