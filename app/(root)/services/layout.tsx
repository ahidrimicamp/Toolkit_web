import ServiceTabs from "@/components/services/ServiceTabs";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="p-12">
      <ServiceTabs />
      {children}
    </div>
  );
};

export default layout;
