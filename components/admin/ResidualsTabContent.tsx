"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adminResidualsTabs } from "@/constants";
import RenderResidualsComponents from "./ResidualsTabSubContent";


const ResidualsTabContent = () => {

  const [activeItem, setActiveItem] = useState<string>("");
  
  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
        <Tabs defaultValue="calculate" className="w-full text-center rounded-md p-4">
          <TabsList className="">
            {adminResidualsTabs.map((tab) => (
              <TabsTrigger onClick={() => handleClick(tab.value)} key={tab.id} value={tab.value}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {RenderResidualsComponents(activeItem || "calculate")}
        </Tabs>
    </>
  );
};

export default ResidualsTabContent;
