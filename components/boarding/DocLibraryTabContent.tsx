"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  documentLibraryTabs } from "@/constants";
import RenderDocLibraryTabComponents from "./DocLibraryTabSubContent";

const DocLibraryTabContent = () => {
  
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };

  return (
    <Tabs
      defaultValue="blankMpaAndAddendums"
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList>
        {documentLibraryTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderDocLibraryTabComponents(activeItem || "blankMpaAndAddendums")}
    </Tabs>
  );
};

export default DocLibraryTabContent;
