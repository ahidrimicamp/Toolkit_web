"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  leadsTabs } from "@/constants";
import RenderLeadsTabComponents from "./LeadsTabSubContent";


const LeadsTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <Tabs
      defaultValue="miCampLeads"
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList>
        {leadsTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderLeadsTabComponents(activeItem || "miCampLeads")}
    </Tabs>
  );
};

export default LeadsTabContent;
