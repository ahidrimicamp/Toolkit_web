"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AgentSetupTabs } from "@/constants";
import RenderSetupComponents from "./SetupContent";

const AgentSetupContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
      <Tabs
        defaultValue="residuals"
        className="col-span-4 w-full rounded-md border border-solid border-gray-400 p-4"
      >
        <TabsList className="">
          {AgentSetupTabs.map((tab) => (
            <TabsTrigger
              onClick={() => handleClick(tab.value)}
              key={tab.id}
              value={tab.value}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {RenderSetupComponents(activeItem || "residuals")}
      </Tabs>
    </>
  );
};

export default AgentSetupContent;
