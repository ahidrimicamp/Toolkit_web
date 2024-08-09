"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AgentSetupTabs } from "@/constants";
import AgentResidualsContent from "./AgentResidualsContent";
import RenderSetupComponents from "./SetupContent";

const AgentSetupContent = () => {

  const [activeItem, setActiveItem] = useState<string>("");


  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
      <div className="w-auto h-screen">
        <Tabs defaultValue="residuals" className="flex-auto  border border-solid border-gray-400 rounded-md p-4 ">
          <TabsList className="">
            {AgentSetupTabs.map((tab) => (
              <TabsTrigger onClick={() => handleClick(tab.value)} key={tab.id} value={tab.value}>
                <p className="text-sm">{tab.title}</p>
              </TabsTrigger>
            ))}
          </TabsList>
          {RenderSetupComponents(activeItem || "residuals")}
        </Tabs>
      </div>
    </>
  );
};

export default AgentSetupContent;
