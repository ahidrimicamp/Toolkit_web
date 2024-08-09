import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const FinancialImportData = () => {
  return (
    <div className="rounded-r-sm rounded-bl-sm border shadow-sm">
      <div className="px-4 py-10">
        <h1 className="text-3xl text-blue-500">Search Criteria</h1>
        <div className="my-5 flex flex-col items-center justify-center">
          <div className="w-fit">
            <section className="flex flex-col items-start">
              <span>
                <Checkbox /> ACH Credit (Acct #8950)
              </span>
              <span>
                <Checkbox /> ACH Debit (ModPay)
              </span>
              <span>
                <Checkbox /> ACH Rejects (Merchant Rejects - ACH Rejects by
                Email)
              </span>
              <span>
                <Checkbox /> ACH Credit (BOK Bank) (TextFile, COmma Delimited,
                No Header Row)
              </span>
            </section>
            <div className="flex flex-col items-center justify-center">
              <Textarea
                placeholder="Text area..."
                className="my-5 h-[14vh] w-full resize-none"
              />
              <Button>Import</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialImportData;
