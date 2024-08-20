import Image from "next/image";
import Link from "next/link";

const BoardingShortcuts = () => {
  return (
    <section className="w-full">
      <div className="m-auto grid w-3/4 grid-cols-3 gap-4 rounded-md text-lg max-xl:grid-cols-2 max-lg:grid-cols-1">
        {/* MERCHANT BOARDING LIST SHORCUT */}
        <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
          <h1 className="text-center font-semibold">Merchant Boarding List</h1>
          <Link href={"/boarding/mBoarding"} className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/list.svg"
              alt="Logo"
              width={60}
              height={60}
              priority
            />
            <p className="flex-1 content-center justify-start text-base">
              List and manage all available Merchant Applications
            </p>
          </Link>
        </div>
        {/* MERCHANT SHORCUT */}
        <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
          <h1 className="text-center font-semibold">Merchant</h1>
          <Link href={"/boarding/merch"} className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/merchant.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 content-center justify-start text-base">
              Find Merchants and Order Equipment
            </p>
          </Link>
        </div>
        {/* AGENT DETAILS SHORCUT */}
        <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
          <h1 className="text-center font-semibold">Agent Details List</h1>
          <Link href={"/boarding/agentDetails"} className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/agents-edit.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 content-center justify-start text-base">
              View and Edit Shipping Agent Detail
            </p>
          </Link>
        </div>
        {/* DOCUMENT LIBRARY SHORCUT */}
        <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
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
            <ul className="flex-1 content-center justify-start text-sm">
              <Link href={""}>
                <li className="list-disc text-nowrap text-sm underline">
                  Blank MPAs & Addendums
                </li>
              </Link>
              <Link href={""}>
                <li className="list-disc text-nowrap text-sm underline">
                  Change Forms
                </li>
              </Link>
              <Link href={""}>
                <li className="list-disc text-nowrap text-sm underline">
                  Equipment Pricing
                </li>
              </Link>
              <Link href={""}>
                <li className="list-disc text-nowrap text-sm underline">
                  Upload & Send Document
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* LEADS SHORCUT */}
        <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
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
            <ul className="flex-1 content-center justify-start px-4 text-sm">
              <Link href={""}>
                <li className="list-disc text-nowrap text-sm underline">
                  North Leads
                </li>
              </Link>
              <Link href={""}>
                <li className="list-disc text-nowrap text-sm underline">
                  FSP Leads
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* SUPPORT TICKETS SHORCUT */}
        <div className="flex-1 justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
          <h1 className="text-center font-semibold">Support Tickets</h1>
          <Link href={"/boarding/supportTickets"} className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/support.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <p className="flex-1 content-center justify-start text-base">
              View and manage your Support Tickets
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BoardingShortcuts;
