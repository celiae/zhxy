import { API_CLASSES } from "../constant/api";
import getUUID from "../util/useUUID";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function classesNumber() {
  const res = await fetch(`${API_CLASSES}/number`);
  return res.json();
}
export async function classesList() {
  const res = await fetch(`${API_CLASSES}/all`);
  return res.json();
}
export async function studentNumInclasses() {
  const res = await fetch(`${API_CLASSES}/students`);
  return res.json();
}
export async function classesDetail(id) {
  const res = await fetch(`${API_CLASSES}/detail/${id}`);
  return res.json();
}
export async function classesCreateOne(data) {
  const res = await fetch(`${API_CLASSES}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function classesUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_CLASSES}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function classesDelete(id) {
  const res = await fetch(`${API_CLASSES}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function classesDeleteAll() {
  const res = await fetch(`${API_CLASSES}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
