import { API_TEACHER } from "../constant/api";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function teacherNumber() {
  const res = await fetch(`${API_TEACHER}/number`);
  return res.json();
}
export async function teacherList() {
  const res = await fetch(`${API_TEACHER}/all`);
  return res.json();
}
export async function teacherOne(id) {
  const res = await fetch(`${API_TEACHER}/detail/${id}`);
  return res.json();
}
export async function teacherGetNameById(id) {
  const res = await fetch(`${API_TEACHER}/getNameById?id=${id}`);
  return res.text();
}
export async function teacherGroupJobTitle() {
  const res = await fetch(`${API_TEACHER}/groupJobTitle`);
  return res.json();
}
export async function teacherEntryDate() {
  const res = await fetch(`${API_TEACHER}/teacherEntry`);
  return res.json();
}
export async function teacherCreateOne(data, uuid) {
  let obj = {};
  Object.assign(obj, data);
  obj.id = uuid;
  const res = await fetch(`${API_TEACHER}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function teacherUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_TEACHER}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function teacherDelete(id) {
  const res = await fetch(`${API_TEACHER}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function teacherDeleteAll() {
  const res = await fetch(`${API_TEACHER}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
