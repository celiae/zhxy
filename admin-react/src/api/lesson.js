import { API_LESSON } from "../constant/api";
import getUUID from "../util/useUUID";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function lessonList() {
  const res = await fetch(`${API_LESSON}/all`);
  return res.json();
}
export async function lessonDetail(id) {
  const res = await fetch(`${API_LESSON}/detail/${id}`);
  return res.json();
}
export async function lessonCreateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  obj.id = getUUID();
  const res = await fetch(`${API_LESSON}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function lessonUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_LESSON}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function lessonDelete(id) {
  const res = await fetch(`${API_LESSON}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function lessonDeleteAll() {
  const res = await fetch(`${API_LESSON}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
