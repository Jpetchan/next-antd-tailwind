import "server-only";
import { redirect } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { cookies } from "next/headers";

export const authenticate = async (isOnLoginPage?: boolean) => {
  try {
    const isCookiePresent = cookies().has("token");
    if (!isCookiePresent) {
      redirect("/auth/login");
    }
    return true;
  } catch (error) {
    deleteCookie("token");
    if (!isOnLoginPage) {
      redirect("/auth/login");
    }
  }
};
