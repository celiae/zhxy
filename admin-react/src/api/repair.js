import { API_REPAIR } from "../constant/api";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function repairNumber() {
  const res = await fetch(`${API_REPAIR}/number`);
  return res.json();
}
export async function repairList() {
  const res = await fetch(`${API_REPAIR}/all`);
  return res.json();
}
export async function studentNumInrepair() {
  const res = await fetch(`${API_REPAIR}/students`);
  return res.json();
}
export async function repairDetail(id) {
  const res = await fetch(`${API_REPAIR}/detail/${id}`);
  return res.json();
}
export async function repairCreateOne(data) {
  const res = await fetch(`${API_REPAIR}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function repairUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_REPAIR}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function repairDelete(id) {
  const res = await fetch(`${API_REPAIR}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function repairDeleteAll() {
  const res = await fetch(`${API_REPAIR}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
