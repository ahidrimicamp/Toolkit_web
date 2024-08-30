"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newOmahaApplicationTabs } from "@/constants";
import RenderNewOmahaComponents from "./NewOmahaTabSubContent";

const NewOmahaTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
      {RenderNewOmahaComponents(activeItem || "merchantDetail")}

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
