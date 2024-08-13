import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

const BoardingAdminShortcuts = () => {
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
    <section className="w-full mb-5">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 w-2/4 m-auto gap-4 rounded-md text-lg">

        {/* EQUIPMENT LIST SHORCUT */}
        <div className="flex-1 justify-center rounded-md border p-5 shadow-md space-y-2">
          <h1 className="text-center font-semibold">Equipment</h1>
          <div
            className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/cart.svg"
              alt="Logo"
              width={60}
              height={60}
              priority
            />
            <ul className="flex-1 px-4 text-sm justify-start content-center">
              <Link href={""}>
                <li className="text-base underline text-nowrap list-disc">Inventory</li>
              </Link>
              <Link href={""}>
                <li className="text-base underline text-nowrap list-disc">Shipping</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* RESIDUALS SHORCUT */}
        <div className="flex-1 justify-center rounded-md border p-5 shadow-md space-y-2">
          <h1 className="text-center font-semibold">Residuals</h1>
          <Link
            href={""}
            className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/leads.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 text-base justify-start content-center">
              Get Residuals Information
            </p>
          </Link>
        </div>
        {/* MARKETING SHORCUT */}
        <div className="flex-1 justify-center rounded-md border p-5 shadow-md space-y-2">
          <h1 className="text-center font-semibold">Marketing</h1>
          <Link
            href={""}
            className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/marketing.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 text-base justify-start content-center">
              View all Marketing Information
            </p>
          </Link>
        </div>
        {/* ADMIN PANEL SHORCUT */}
        <div className="flex-1 justify-center rounded-md border p-5 shadow-md space-y-2">
          <h1 className="text-center font-semibold">Admin Panel</h1>
          <Link
            href={""}
            className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/admin.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 text-base justify-start content-center">
              View User / Roles List
            </p>
          </Link>
        </div>



      </div>
    </section>
  );
};

export default BoardingAdminShortcuts;
