import { API_CLASSROOM } from "../constant/api";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function classroomList() {
  const res = await fetch(`${API_CLASSROOM}/all`);
  return res.json();
}
export async function classroomDetail(id) {
  const res = await fetch(`${API_CLASSROOM}/detail/${id}`);
  return res.json();
}
export async function classroomCreateOne(data) {
  const res = await fetch(`${API_CLASSROOM}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function classroomUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_CLASSROOM}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function classroomDelete(id) {
  const res = await fetch(`${API_CLASSROOM}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function classroomDeleteAll() {
  const res = await fetch(`${API_CLASSROOM}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
