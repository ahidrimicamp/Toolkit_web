"use client";

import BoardingAdminShortcuts from "@/components/boarding/BoardingAdminShortcuts";
import BoardingShortcuts from "@/components/boarding/BoardingShortcuts";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="">

        <h1 className="text-center text-3xl text-sky-500">Welcome!</h1>
        <h3 className="text-center text-xl font-semibold">MiCamp Agent Portal</h3>

        <div className="flex max-xl:flex-wrap text-lg gap-10 w-full px-8 my-5">
          <p className="flex-auto  text-start">MiCamp Solutions is a leading payment processing company that stands out for its exceptional customer service and
            innovative financial solutions. As a 5x Inc. 5000 awardee,
            MiCamp processes $50 billion annually and serves over 50,000 clients,
            underscoring its industry leadership and reliability.
            With a focus on providing seamless and secure transaction experiences,
            MiCamp offers a wide range of services tailored to meet the unique needs of businesses across various industries.
          </p>
          <div className="flex-none max-lg:hidden border"></div>
          <p className="flex-auto text-start">
            Their commitment to excellence is evident in their competitive residual structures for ISO-boarded accounts and their dedication
            to fostering long-term partnerships with clients.
            By leveraging cutting-edge
            technology and a customer-centric approach, MiCamp Solutions
            consistently delivers reliable and efficient payment processing solutions,
            ensuring businesses can operate smoothly and grow confidently.
          </p>
        </div>

        <p className="text-center px-8 text-lg my-7">
          Thank you for choosing <b>MiCamp Solutions</b>…we strive to be your best relationship in business!
        </p>
        <BoardingShortcuts />
      
        <h2 className="text-center font-bold text-2xl my-7">Admins Only</h2>
        <BoardingAdminShortcuts/>
      </section>
    </>
  );
};

export default Page;
