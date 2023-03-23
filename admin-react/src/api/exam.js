import { API_EXAM } from "../constant/api";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function examList() {
  const res = await fetch(`${API_EXAM}/all`);
  return res.json();
}
export async function examDetail(id) {
  const res = await fetch(`${API_EXAM}/detail/${id}`);
  return res.json();
}
export async function examCreateOne(data) {
  const res = await fetch(`${API_EXAM}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function examUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_EXAM}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function examDelete(id) {
  const res = await fetch(`${API_EXAM}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function examDeleteAll() {
  const res = await fetch(`${API_EXAM}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
