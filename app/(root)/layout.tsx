import React from "react";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import WelcomeBar from "@/components/Shared/Home/WelcomeBar";
import Footer from "@/components/Shared/Footer/Footer";
import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";

const layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await auth();
  const result = await getUserByEmail(session?.user?.email);
  console.log(result);
  return (
    <div className="flex">
      <Sidebar props={result} />
      <div className="relative flex-1">
        <WelcomeBar
          user={
            result?.firstname && result?.lastname
              ? `${result.firstname} ${result.lastname}`
              : result?.name
          }
        />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
