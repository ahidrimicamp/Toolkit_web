"use client";

import React, { useMemo } from "react";
import AgentSetup from "@/components/agent/AgentSetup";

const Page = () => {

  return (
    <div>
      <h1 className='text-2xl text-sky-500 mb-3 '>Agent Detail</h1>
      <AgentSetup />
    </div>
  );
};

export default Page;
