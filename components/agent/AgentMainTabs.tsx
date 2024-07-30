import React from "react";
import Link from "next/link";
import { agentMainTabs as tabs } from "@/constants";
import { usePathname } from "next/navigation";

const AgentMainTabs = () => {
  const pathname = usePathname();

  return (
    <div className="mb-0 box-content inline-flex gap-2 rounded-t-lg border border-b-0 border-solid border-gray-400 px-5">
      {tabs.map((item) => {
        const isActive =
          (pathname?.includes(item.route) && item.title.length > 1) ||
          pathname === item.title;

            return (
                <>
                    <div className={`${isActive ? " text-sky-500 border-b-8 border-sky-500" : "dark:text-white text-black "} p-3 text-lg hover:bg-slate-200 dark:hover:bg-slate-700`}>
                        <Link href={item.route}>
                            <p className="text-pretty">{item.title}</p>
                        </Link>
                    </div>  
                </>
            )
        })}
        
      </div> 
  )
}
export default AgentMainTabs;