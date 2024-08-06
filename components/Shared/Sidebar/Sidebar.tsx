"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import ProfileLogo from "../Profile/ProfileLogo";
import MobileSideNav from "./MobileNav";
import ThemeIcon from "@/components/ThemeIcon";

const Sidebar = () => {
  const pathname = usePathname();
  const Firstname = "Tony";
  const Lastname = "Stark";

  const role = "admin";

  return (
    <>
      <section className="sticky left-0 top-0 flex h-screen w-64 flex-col justify-between overflow-y-auto dark:bg-[#000000] border-r p-6 pt-16 dark:shadow-none max-2xl:w-fit max-md:hidden 2xl:w-[266px]">
        <div className="flex w-fit flex-1 flex-col gap-6">
          <div className="w-fit">
            <Link href="/" className="hidden 2xl:block">
              <Image
                src={ThemeIcon()}
                alt="logo"
                width={250}
                height={250}
                priority
              />
            </Link>

            <Link href="/">
              <Image
                src="/icon/Chain-smol.png"
                alt="logo"
                width={60}
                height={60}
                priority
                className="hidden max-2xl:block"
              />
            </Link>
          </div>

          <hr className="text-[14px]" />

          {sidebarLinks.map((item) => {
            if (item.label === "Admin" && role !== "admin") {
              return null;
            }
            const isActive =
              (pathname?.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;
            return (
              <Link
                className={`${isActive ? "bg-slate-300 shadow-md dark:bg-zinc-900 text-sky-500" : ""} flex w-full items-center justify-start gap-4 rounded-lg bg-transparent p-2`}
                key={item.label}
                href={item.route}
              >
                {React.createElement(item.icon)}
                <p
                  className={`${isActive ? "base-bold" : "base-medium"} max-2xl:hidden`}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>

        <ProfileLogo Firstname={Firstname} Lastname={Lastname} />
      </section>

      <MobileSideNav />
    </>
  );
};

export default Sidebar;
