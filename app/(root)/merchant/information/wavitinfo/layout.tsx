import WavitInfoTab from "@/components/merchants/WavitInfoTab";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <section className="">
        <h1 className="mb-3 text-2xl text-sky-500">WAVit Info</h1>
        <WavitInfoTab />
        {children}
      </section>
    </>
  );
};

export default layout;
