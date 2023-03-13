import { API_LAB } from "../constant/api";
import getUUID from "../util/useUUID";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function labNumber() {
  const res = await fetch(`${API_LAB}/number`);
  return res.json();
}
export async function labList() {
  const res = await fetch(`${API_LAB}/all`);
  return res.json();
}
export async function labDetail(id) {
  const res = await fetch(`${API_LAB}/detail/${id}`);
  return res.json();
}
export async function labCreateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  obj.id = getUUID();
  const res = await fetch(`${API_LAB}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function labUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_LAB}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function labDelete(id) {
  const res = await fetch(`${API_LAB}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function labDeleteAll() {
  const res = await fetch(`${API_LAB}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
