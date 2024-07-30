"use client";

import React from "react";
import MerchantsInformationTab from "@/components/merchants/MerchantsInformationTab";
import MerchantInfoSummary from "@/components/merchants/MerchantInfoSummary";


const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
        <MerchantInfoSummary/>
        <div className="flex gap-3">
            <MerchantsInformationTab/>
            <div className="h-auto w-auto grow p-5 mb-0 border border-solid border-gray-400 shadow-md rounded-lg">
              {children}
            </div>
        </div>
    </>
  );
};

export default layout;
