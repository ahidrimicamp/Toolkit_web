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
        <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
          <h1 className="text-center font-semibold">Residuals</h1>
          <Link href={"/boarding/residuals"} className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/leads.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 content-center justify-start text-base">
              Get Residuals Information
            </p>
          </Link>
        </div>
        {/* MARKETING SHORCUT */}
        <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
          <h1 className="text-center font-semibold">Marketing</h1>
          <Link href={"/boarding/marketing"} className="flex gap-4 px-2">
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
          </Link>
        </div>
        {/* ADMIN PANEL SHORCUT */}
        <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
          <h1 className="text-center font-semibold">Admin Panel</h1>
          <Link href={""} className="flex gap-4 px-2">
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BoardingAdminShortcuts;
