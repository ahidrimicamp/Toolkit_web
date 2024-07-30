"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AgentSetupTabs } from "@/constants";
import AgentResidualsContent from "./AgentResidualsContent";
import RenderSetupComponents from "./SetupContent";

const AgentSetupContent = () => {

  const [activeItem, setActiveItem] = useState<string>("");
  const navItems = [
    { id: "1", title: "FD Omaha", value: "fd-omaha" },
    { id: "2", title: "FD North", value: "fd-north" },
    { id: "3", title: "Splits", value: "splits" },
    {
      id: "4",
      title: "Calculations",
      value: "calculations",
    },
  ];

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
      
        <Tabs defaultValue="residuals" className="w-full col-span-4 border border-solid border-gray-400 rounded-md p-4">
          <TabsList className="">
            {AgentSetupTabs.map((tab) => (
              <TabsTrigger onClick={() => handleClick(tab.value)} key={tab.id} value={tab.value}>
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
