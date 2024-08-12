import { db } from "@/lib/database";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: {
        role: true, // Include the Role relation
        group: true, // Include the Group relation
      },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};
