import { API_ADMIN } from "../constant/api";

export default async function signin(loginForm) {
  const res = await fetch(`${API_ADMIN}/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(loginForm),
  });
  return res;
}
