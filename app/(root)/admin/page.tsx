import React from "react";
import AdminNavbar from "./adminNavbar";
import AdminBody from "./AdminBody";
import RingCentralImport from "@/components/admin/RingCentralImport";
import LoadProcessingData from "@/components/admin/LoadProcessingData";

const Admin = () => {

  return (
    <section className="flex py-4 min-h-[40rem] items-center m-auto gap-6 w-2/4 max-xl:w-3/4 max-lg:flex-wrap">
      <RingCentralImport />
      <LoadProcessingData />
    </section>
  );
};

export default Admin;
