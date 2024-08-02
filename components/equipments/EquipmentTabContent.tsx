"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EquipmentTabs } from "@/constants";
import RenderEquipmentComponents from "./EquipmentContent";


const EquipmentTabContent = () => {

  const [activeItem, setActiveItem] = useState<string>("");
  
  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
        <Tabs defaultValue="lookup" className="w-full rounded-md p-4">
          <TabsList className="">
            {EquipmentTabs.map((tab) => (
              <TabsTrigger onClick={() => handleClick(tab.value)} key={tab.id} value={tab.value}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {RenderEquipmentComponents(activeItem || "lookup")}
        </Tabs>
    </>
  );
};

export default EquipmentTabContent;
