import { API_APARTMENT } from "../constant/api";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function apartmentNumber() {
  const res = await fetch(`${API_APARTMENT}/number`);
  return res.json();
}
export async function apartmentList() {
  const res = await fetch(`${API_APARTMENT}/all`);
  return res.json();
}
export async function studentNumInapartment() {
  const res = await fetch(`${API_APARTMENT}/students`);
  return res.json();
}
export async function apartmentDetail(id) {
  const res = await fetch(`${API_APARTMENT}/detail/${id}`);
  return res.json();
}
export async function apartmentCreateOne(data) {
  const res = await fetch(`${API_APARTMENT}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function apartmentUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_APARTMENT}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function apartmentDelete(id) {
  const res = await fetch(`${API_APARTMENT}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function apartmentDeleteAll() {
  const res = await fetch(`${API_APARTMENT}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
