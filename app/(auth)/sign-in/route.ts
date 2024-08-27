import { slackLogin } from "@/auth";
import { generateCodeVerifier, generateState } from "arctic";

export const GET = async () => {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
};
