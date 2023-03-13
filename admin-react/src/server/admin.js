import { API_ADMIN } from "../constant/api";

export default async function changePassword(changePass, username) {
  const res = await fetch(`${API_ADMIN}/changepass/${username}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(changePass),
  });
  return res;
}
