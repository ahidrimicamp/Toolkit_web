import { validateRequest } from "@/auth";
import ProfileBody from "@/components/Shared/Profile/ProfileBody";
import prisma from "@/constants/connectToDB";

export default async function ProfilePage() {
  const session = await validateRequest();
  if (!session.user) return null;
  const result = await prisma.user.findFirst({
    where: {
      id: session.user.id,
    },
  });

  console.log(result);
  return (
    <section className="w-full">
      <ProfileBody user={result} />
    </section>
  );
}
