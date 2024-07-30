"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WavitInfoTab = () => {
  const pathname = usePathname();
  const tabItems = [
    {
      id: "1",
      title: "Transactions",
      value: "transactions",
      route: "/merchant/information/wavitinfo/transactions",
    },
    {
      id: "2",
      title: "Settings",
      value: "settings",
      route: "/merchant/information/wavitinfo/settings",
    },
  ];

  return (
    <div className="m-auto text-center">
      <div className="m-auto inline-flex gap-1 text-nowrap rounded-md bg-gray-200 p-1 dark:bg-zinc-700 dark:text-white">
        {tabItems.map((item) => {
          const isActive =
            (pathname?.includes(item.route) && item.title.length > 1) ||
            pathname === item.title;

          return (
            <Link href={item.route} className="" key={item.title}>
              <div
                className={`${isActive ? "bg-zinc-700 text-white dark:bg-gray-200 dark:text-black" : ""} flex-none rounded p-2 text-center hover:bg-gray-400`}
              >
                {item.title}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WavitInfoTab;
