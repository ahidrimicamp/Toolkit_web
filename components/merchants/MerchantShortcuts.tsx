import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NewMerchant from "./NewMerchant";
import { useTheme } from "next-themes";
// import Theme from "../Home/Theme";

const MerchantShortcuts = () => {
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
    <section className="w-auto">
      <h1 className="mb-4 text-center text-3xl text-sky-500">Shortcuts</h1>
      
      <div className="flex w-auto flex-wrap justify-center gap-4 rounded-md text-lg text-sky-500">
        {/* MERCHANT ICON */}
        <div className="flex flex-1 flex-col justify-center rounded-md border border-gray-400 bg-transparent px-2 shadow-md">
          <div className="flex justify-center">
            <h1>Merchant</h1>
          </div>
          <Dialog>
            <DialogTrigger>
              <div className="my-4 flex justify-center">
                <Image
                  src={imgSrc}
                  alt="Logo"
                  width={75}
                  height={75}
                  priority
                />
              </div>
              <div className="flex justify-center">
                <h1 className="text-black dark:text-white">
                  Create New Merchant
                </h1>
              </div>
            </DialogTrigger>
            <DialogContent className="2xl:[1200px] max-lg:max-w-[500px] lg:max-w-[800px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold">
                  Merchant Information
                </DialogTitle>
                <NewMerchant />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex-1 justify-center rounded-md border border-gray-400 bg-transparent p-5 text-center shadow-md">
          <h1>Tasks / Logs</h1>
          <div className="">
            <Image
              className="m-auto my-5"
              src="/icon/colorful/create-task.svg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            
            <h1 className="justify-center text-nowrap text-black dark:text-white">
              Create Task
            </h1>
          </div>
        </div>
        <div className="flex-1 justify-center rounded-md border border-gray-400 bg-transparent p-5 text-center shadow-md">
          <h1>Documents</h1>
          <div className="">
            <Image
              className="m-auto my-5"
              src="/icon/colorful/upload-document.svg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            
            <h1 className="justify-center text-nowrap text-black dark:text-white">
              Upload Document
            </h1>
          </div>
        </div>

        <div className="flex-1 justify-center rounded-md border border-gray-400 bg-transparent p-5 text-center shadow-md">
          <h1>Equipment</h1>
          <div className="">
            <Image
              className="m-auto my-5"
              src="/icon/colorful/create-order.svg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            <h1 className="justify-center text-nowrap text-black dark:text-white">
              Create Order
            </h1>
          </div>
        </div>

        <div className="flex-1 justify-center rounded-md border border-gray-400 bg-transparent p-5 text-center shadow-md">
          <h1>Call Logs</h1>
          <div className="">
            <Image
              className="m-auto my-5"
              src="/icon/colorful/call-logs.svg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            <h1 className="justify-center text-nowrap text-black dark:text-white">
              See Logs / Tasks
            </h1>
          </div>
        </div>

        <div className="flex-1 justify-center rounded-md border border-gray-400 bg-transparent p-5 text-center shadow-md">
          <h1>Leasing</h1>
          <div className="">
            <Image
              className="m-auto my-5"
              src="/icon/colorful/new-leasing.svg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            <h1 className="justify-center text-nowrap text-black dark:text-white">
              Create Order
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantShortcuts;
