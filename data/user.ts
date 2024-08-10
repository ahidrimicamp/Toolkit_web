"use server";

import { signOut } from "@/auth";
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
        Role: true, // Include the Role relation
        Group: true, // Include the Group relation
      },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  try {
    await signOut({ redirectTo: "/sign-in" });
  } catch (error) {
    console.log(error);
  }
};
