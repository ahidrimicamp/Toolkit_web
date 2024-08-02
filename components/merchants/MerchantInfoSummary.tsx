import React from "react";
import { summaryItems } from "@/constants";

const MerchantInfoSummary = () => {
  return (
    <div className="mb-5 mt-0 w-auto rounded-lg border border-solid border-gray-300 p-4 shadow-md">
      <h1 className="text-3xl text-sky-500">Merchant Details</h1>
      <div className="grid w-auto grid-rows-4 gap-1 p-4 lg:grid-flow-col">
        {summaryItems.map((item) => {
          return (
            <>
              <div className="flex gap-3">
                <div className="w-1/2 text-end">
                  <p className="font-bold">{item.title}</p>
                </div>
                <div className="w-1/2 text-nowrap text-start">
                  <p>{item.value}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MerchantInfoSummary;
