"use client";

import EntryHeader from "@/components/financial/EntryHeader";
import FinancialBody from "@/components/financial/FinancialBody";
import React from "react";

const FinancialAddEntry = () => {
  return (
    <div className="rounded-r-sm rounded-bl-sm border shadow-sm">
      <div className="flex px-4 py-10">
        <EntryHeader />
      </div>
      <FinancialBody />
    </div>
  );
};

export default FinancialAddEntry;
