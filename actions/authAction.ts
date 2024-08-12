"use server";

import { z } from "zod";
import { SignInSchema, SignUpSchema } from "@/schemas";
import { signIn } from "@/auth";
import { db } from "@/lib/database";
import bcrypt from "bcryptjs";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
import axios from "axios";

export const login = async (values: z.infer<typeof SignInSchema>) => {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      error: "Email does not exist!",
    };
  }

  if (!existingUser.emailVerified) {
    // eslint-disable-next-line no-unused-vars
    const verificationToken = await generateVerificationToken(
      existingUser.email,
    );
    // Uncomment to send verification email
    // await sendVerificationEmail(verificationToken.email, verificationToken.token);
    return { success: "Confirmation email sent!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Login succeeded, welcome back!" };
  } catch (err) {
    if (err instanceof AuthError) {
      return {
        error:
          err.type === "CredentialsSignin"
            ? "Invalid Credentials!"
            : "Something went wrong!",
      };
    }
    console.error("Login error:", err);
    return { error: "An unexpected error occurred." };
  }
};

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, firstname, lastname, phone, groupTitle, roleTitle } =
    validatedFields.data;

  try {
    const existingUser = await db.user.findUnique({ where: { email } });

    if (existingUser) {
      return { error: "This email has already been taken!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        phone,
      },
    });

    await db.group.create({
      data: {
        title: groupTitle,
        userId: newUser.id,
      },
    });

    await db.role.create({
      data: {
        title: roleTitle,
        userId: newUser.id,
      },
    });

    // eslint-disable-next-line no-unused-vars
    const verificationToken = await generateVerificationToken(email);
    // Uncomment to send verification email
    // await sendVerificationEmail(verificationToken.email, verificationToken.token);

    // Send the welcome email
    await axios.post("/api/send-email", {
      to: email,
      subject: "Welcome to Toolkit web! Please, confirm your email.",
      text: `Hello ${firstname}, welcome to Toolkit web!`,
      html: `<p>Hello ${firstname}, welcome to Toolkit web!</p>`,
    });

    return { success: "Yay!! Your user has been created!" };
  } catch (err) {
    console.error("Sign-up error:", err);
    return { error: "An error occurred during sign-up" };
  }
};
