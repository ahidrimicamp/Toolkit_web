"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adminDatabaseTabs } from "@/constants";
import RenderDatabaseComponents from "./DatabaseTabSubContent";


const DatabaseTabContent = () => {

  const [activeItem, setActiveItem] = useState<string>("");
  
  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
        <Tabs defaultValue="users" className="w-full text-center rounded-md p-4">
          <TabsList className="">
            {adminDatabaseTabs.map((tab) => (
              <TabsTrigger onClick={() => handleClick(tab.value)} key={tab.id} value={tab.value}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {RenderDatabaseComponents(activeItem || "users")}
        </Tabs>
    </>
  );
};

export default DatabaseTabContent;
