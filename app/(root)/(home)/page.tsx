import EquipmentHome from "@/components/home/EquipmentHome";
import FinanceHome from "@/components/home/FinanceHome";
import GeneralHome from "@/components/home/GeneralHome";
import SupportHome from "@/components/home/SupportHome";
import { getUser } from "@/constants/actions/user.action";

export default async function Home() {
  const result = await getUser();
  return (
    <section>
      {result?.Department?.id === "General" ||
        (result?.Department?.id === "IT" && <GeneralHome />)}
      {result?.Department?.id === "Support" && <SupportHome />}
      {result?.Department?.id === "Equipment" && <EquipmentHome />}
      {result?.Department?.id === "Finance" && <FinanceHome />}
    </section>
  );
}
