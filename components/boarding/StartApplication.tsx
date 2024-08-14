import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

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
  ];

  return (
    <>
      <section>
        <h2 className="my-7 text-center text-xl font-semibold">
          Start a New Application
        </h2>

        {linksApplication.map((item) => {
          return (
            <div key={item.Title} className="mb-4 flex w-full justify-between rounded-lg bg-gray-100 p-2 px-10 dark:bg-black">
              <h3 className="content-center text-lg font-semibold max-lg:text-sm">
                {item.Title}
              </h3>
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
          );
        })}
      </section>
    </>
  );
};

export default StartApplication;
