import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

const BoardingShortcuts = () => {
  const dark = "/icon/colorful/new-merchant-dark.svg";
  const light = "/icon/colorful/new-merchant-blue.svg";
  const { theme, systemTheme } = useTheme();

  // eslint-disable-next-line no-unused-vars
  const [resolvedTheme, setResolvedTheme] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (theme === "system") {
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme, systemTheme]);

  const imgSrc =
    theme === "system"
      ? systemTheme === "dark"
        ? light
        : dark
      : theme === "light"
        ? dark
        : light;

  return (
    <section className="w-full">
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 w-3/4 m-auto gap-4 rounded-md text-lg">

        {/* MERCHANT BOARDING LIST SHORCUT */}
        <div className="flex-1 justify-center rounded-md border p-5 shadow-md space-y-2">
          <h1 className="text-center font-semibold">Merchant Boarding List</h1>
          <Link
            href={""}
            className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/list.svg"
              alt="Logo"
              width={60}
              height={60}
              priority
            />
            <p className="flex-1 text-base justify-start content-center">
              List and manage all available Merchant Applications
            </p>
          </Link>
        </div>
        {/* MERCHANT SHORCUT */}
        <div className="flex-1 justify-center rounded-md border p-5 shadow-md space-y-2">
          <h1 className="text-center font-semibold">Merchant</h1>
          <Link
            href={""}
            className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/merchant.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 text-base justify-start content-center">
              Find Merchants and Order Equipment
            </p>
          </Link>
        </div>
        {/* AGENT DETAILS SHORCUT */}
        <div className="flex-1 justify-center rounded-md border p-5 shadow-md space-y-2">
          <h1 className="text-center  font-semibold">Agent Details List</h1>
          <Link
            href={""}
            className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/agents-edit.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 text-base justify-start content-center">
              View and Edit Shipping Agent Detail
            </p>
          </Link>
        </div>
        {/* DOCUMENT LIBRARY SHORCUT */}
        <div className="flex-1 justify-center rounded-md border p-5 shadow-md space-y-2">
          <h1 className="text-center font-semibold">Document Library</h1>
          <div className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/doc-library.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <ul className="flex-1 text-sm justify-start content-center">
              <Link href={""}>
                <li className="text-sm underline text-nowrap list-disc">Blank MPAs & Addendums</li>
              </Link>
              <Link href={""}>
                <li className="text-sm underline text-nowrap list-disc">Change Forms</li>
              </Link>
              <Link href={""}>
                <li className="text-sm underline text-nowrap list-disc">Equipment Pricing</li>
              </Link>
              <Link href={""}>
                <li className="text-sm underline text-nowrap list-disc">Upload & Send Document</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* LEADS SHORCUT */}
        <div className="flex-1 justify-center rounded-md border p-5 shadow-md space-y-2">
          <h1 className="text-center font-semibold">Leads</h1>
          <div className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/leads.svg"
              alt="Logo"
              width={55}
              height={55}
              priority
            />
            <ul className="flex-1 px-4 text-sm justify-start content-center">
              <Link href={""}>
                <li className="text-sm underline text-nowrap list-disc">North Leads</li>
              </Link>
              <Link href={""}>
                <li className="text-sm underline text-nowrap list-disc">FSP Leads</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* SUPPORT TICKETS SHORCUT */}
        <div className="flex-1 justify-center rounded-md border p-5 shadow-md space-y-2">
          <h1 className="text-center font-semibold">Support Tickets</h1>
          <Link
            href={""}
            className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/support.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 text-base justify-start content-center">
              View and manage your Support Tickets
            </p>
          </Link>
        </div>


      </div>
    </section>
  );
};

export default BoardingShortcuts;
