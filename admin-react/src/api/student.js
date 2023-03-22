import { API_STUDENT } from "../constant/api";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");

export async function studentNumber() {
  const res = await fetch(`${API_STUDENT}/number`);
  return res.json();
}
export async function studentList() {
  const res = await fetch(`${API_STUDENT}/all`);
  return res.json();
}
export async function studentOne(id) {
  const res = await fetch(`${API_STUDENT}/detail/${id}`);
  return res.json();
}
export async function studentSearch(searchString) {
  const res = await fetch(`${API_STUDENT}/search${searchString}`);
  return res.json();
}
export async function studentCreateOne(data) {
  const res = await fetch(`${API_STUDENT}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function studentUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_STUDENT}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function studentDelete(id) {
  const res = await fetch(`${API_STUDENT}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function studentDeleteAll() {
  const res = await fetch(`${API_STUDENT}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
