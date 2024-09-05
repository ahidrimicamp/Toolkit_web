import Image from "next/image";
import Link from "next/link";

const BoardingAdminShortcuts = () => {
  return (
    <section className="mb-5 w-full">
      <div className="m-auto grid w-2/4 grid-cols-2 gap-4 rounded-md text-lg max-lg:grid-cols-1">
        {/* EQUIPMENT LIST SHORCUT */}
        <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
          <h1 className="text-center font-semibold">Equipment</h1>
          <div className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/cart.svg"
              alt="Logo"
              width={60}
              height={60}
              priority
            />
            <ul className="flex-1 content-center justify-start px-4 text-sm">
              <Link href={""}>
                <li className="list-disc text-nowrap text-base underline">
                  Inventory
                </li>
              </Link>
              <Link href={""}>
                <li className="list-disc text-nowrap text-base underline">
                  Shipping
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* RESIDUALS SHORCUT */}
        <Link
          href={"/boarding/residuals"}
          className="justify-center rounded-md border p-5 px-2 shadow-md transition duration-300 hover:border-sky-500"
        >
          <h1 className="text-center font-semibold">Residuals</h1>
          <div className="mx-3 flex justify-center gap-2 space-y-2 text-center">
            <Image
              className="flex-none"
              src="/icon/colorful/leads.svg"
              alt="Logo"
              width={50}
              height={50}
              priority
            />
            <p className="flex-1 content-center justify-start text-base">
              Get Residuals Information
            </p>
          </div>
        </Link>
        {/* MARKETING SHORCUT */}
        <Link
          href={"/boarding/marketing"}
          className="justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500"
        >
          <h1 className="text-center font-semibold">Marketing</h1>
          <div className="flex flex-1 gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/marketing.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 content-center justify-start text-base">
              View all Marketing Information
            </p>
          </div>
        </Link>
        {/* ADMIN PANEL SHORCUT */}
        <Link
          href={"/admin/userAdmin"}
          className="rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500"
        >
            <h1 className="text-center font-semibold">Admin Panel</h1>
          <div className="flex flex-1 justify-center gap-4 space-y-2 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/admin.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 content-center justify-start text-base">
              View User / Roles List
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BoardingAdminShortcuts;
