"use client";

import React from "react";
import AdminMainTabs from "@/components/admin/AdminMainTabs";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
        <div className="px-12 w-full max-sm:w-fit">
            <AdminMainTabs />
            <div className="h-auto w-auto mb-0 border p-2  shadow-md rounded-tr-lg rounded-br-lg rounded-bl-lg">
              {children}
            </div>
            <br/>
        </div>
    </>
  );
};

export default layout;