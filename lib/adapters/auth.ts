
import { signIn } from "next-auth/react";
import { LoginData, SignupData } from "@/types/auth";

export const authAdapter = {
  login: async (data: LoginData) => {
    return await signIn("credentials", {
      ...data,
      redirect: false,
    });
  },

  signup: async (data: SignupData) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred during signup.");
    }

    return await response.json();
  },
};
