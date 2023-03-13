import { API_DEPARTMENT } from "../constant/api";
import getUUID from "../util/useUUID";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function departmentNumber() {
  const res = await fetch(`${API_DEPARTMENT}/number`);
  return res.json();
}
export async function departmentList() {
  const res = await fetch(`${API_DEPARTMENT}/all`);
  return res.json();
}
export async function departmentDetail(id) {
  const res = await fetch(`${API_DEPARTMENT}/detail/${id}`);
  return res.json();
}
export async function departmentCreateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  obj.id = getUUID();
  const res = await fetch(`${API_DEPARTMENT}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function departmentUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_DEPARTMENT}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function departmentDelete(id) {
  const res = await fetch(`${API_DEPARTMENT}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function departmentDeleteAll() {
  const res = await fetch(`${API_DEPARTMENT}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
