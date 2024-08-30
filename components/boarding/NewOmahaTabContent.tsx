"use client";

import React, { useState } from "react";
import RenderNewOmahaComponents from "./NewOmahaTabSubContent";
import { Button } from "../ui/button";


const NewOmahaTabContent = () => {
  // const handleClick = (value: string) => {
  //   setActiveItem(value);
  // };
  // const [activeItem, setActiveItem] = useState<string>("");
  // const [tab1, setTab1] = useState("");
  // const [tab2, setTab2] = useState("");
  // const [tab3, setTab3] = useState("");
  // const [tab4, setTab4] = useState("");
  // const [tab5, setTab5] = useState("");

  // const handleTab1 = (value: string) => {};
  const [link, setLink] = useState("merchantDetail");
  const handleClick = (value: string) => {
    console.log("passou por aqui:" + value)
    setLink(value);
  };

  return (
    <>
      <div className="relative mt-5 flex justify-center">
        {/* Container for circles and line */}
        <div className="relative flex items-center">
          {/* Progress bar line */}
          <div
            className="absolute top-1/3 z-0 bg-[#E4E4E7] dark:bg-[#27272A]"
            style={{
              height: "2px",
              width: "calc(100% - 4rem)",
              transform: "translateX(2rem)",
            }}
          ></div>

          {/* Circles and text */}
          <div className="z-20 flex items-center gap-10">
            <div className="flex flex-col items-center">
              <div className="flex size-8 items-center justify-center rounded-full border border-sky-500 bg-sky-500">
                1
              </div>
              <p className="mt-2 text-center text-xs">Merchant Detail</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex size-8 items-center justify-center rounded-full border border-sky-500 bg-white dark:bg-black">
                2
              </div>
              <p className="mt-2 text-center text-xs text-sky-500">
                Financial Information
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex size-8 items-center justify-center rounded-full border bg-white dark:bg-black">
                3
              </div>
              <p className="mt-2 text-center text-xs">Merchant Owner</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex size-8 items-center justify-center rounded-full border bg-white dark:bg-black">
                4
              </div>
              <p className="mt-2 text-center text-xs">Programming Request</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex size-8 items-center justify-center rounded-full border bg-white dark:bg-black">
                5
              </div>
              <p className="mt-2 text-center text-xs">OMAHA Details</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button  onClick={() => handleClick("financialInformation")}>Next</Button>
      </div>
      {RenderNewOmahaComponents(link)}

      {/* THIS IS THE STANDARD CODE TO THE CONVENTIONAL TABS */}
      {/*     
      <Tabs
        defaultValue="merchantDetail"
        className="w-full rounded-md p-4 text-center"
      >
        <TabsList className="">
          {newOmahaApplicationTabs.map((tab) => (
            <TabsTrigger
              onClick={() => handleClick(tab.value)}
              key={tab.id}
              value={tab.value}
              title={tab.title}
            >
              <p className="hidden max-xl:block">
                {React.createElement(tab.icon)}
              </p>
              <p className="max-xl:hidden">{tab.title}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {RenderNewOmahaComponents(activeItem || "merchantDetail")}
      </Tabs> */}
    </>
  );
};

export default NewOmahaTabContent;
