import { signOut } from "@/auth";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST") {
      return res.status(500).end();
    }

    await signOut();

    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};
