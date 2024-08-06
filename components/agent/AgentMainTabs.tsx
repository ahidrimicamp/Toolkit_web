import React from "react";
import Link from "next/link";
import { agentMainTabs as tabs } from "@/constants";
import { usePathname } from "next/navigation";

const AgentMainTabs = () => {
  const pathname = usePathname();

  return (
    <div className="mb-0 box-content inline-flex gap-2 rounded-t-lg border border-b-0  px-5">
      {tabs.map((item) => {
        const isActive =
          (pathname?.includes(item.value) && item.title.length > 1) ||
          pathname === item.route;

        return (
          <>
            <div
              className={`${isActive ? "border-b-8 border-sky-500 text-sky-500" : "text-black dark:text-white"} p-3 text-lg hover:bg-slate-200 dark:hover:bg-slate-700`}
            >
              <Link href={item.route}>
                <p className="text-pretty">{item.title}</p>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default AgentMainTabs;
