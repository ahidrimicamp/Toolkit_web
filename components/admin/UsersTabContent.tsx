"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { userAdminTabs } from "@/constants";
import RenderUserAdminComponents from "./UsersTabSubContent";

const UsersTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };

  return (
    <Tabs
      defaultValue="users"
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList>
        {userAdminTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderUserAdminComponents(activeItem || "users")}
    </Tabs>
  );
};

export default UsersTabContent;
