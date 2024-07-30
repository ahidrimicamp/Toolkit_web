import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AgentResidualsContent from "./AgentResidualsContent";
import { AgentSetupTabs } from "@/constants";
import AgentSetupForm from "./AgentSetupForm";
import AgentSetupContent from "./AgentSetupContent";

const AgentSetup = () => {
  return (
    <div className="flex max-lg:flex-wrap gap-4">
      <div className="w-full">
        <AgentSetupForm />
      </div>

      <AgentSetupContent/>
    </div>
  );
};

export default AgentSetup;
