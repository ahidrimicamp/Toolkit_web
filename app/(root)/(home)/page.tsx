import { validateRequest } from "@/auth";
import EquipmentHome from "@/components/home/EquipmentHome";
import FinanceHome from "@/components/home/FinanceHome";
import GeneralHome from "@/components/home/GeneralHome";
import SupportHome from "@/components/home/SupportHome";
import { getUser } from "@/constants/actions/user.action";
import { redirect } from "next/navigation";

export default async function Home() {
  const result = await getUser();
  const session = await validateRequest();

  if (!session.user) return redirect("/sign-in");
  return (
    <section>
      {result?.Department?.title === "General" ||
        (result?.Department?.title === "IT" && <GeneralHome />)}
      {result?.Department?.title === "Support" && <SupportHome />}
      {result?.Department?.title === "Equipment" && <EquipmentHome />}
      {result?.Department?.title === "Finance" && <FinanceHome />}
    </section>
  );
}
