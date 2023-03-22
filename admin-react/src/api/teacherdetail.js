import { API_TEACHERDETAIL } from "../constant/api";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function teacherDetailNumber() {
  const res = await fetch(`${API_TEACHERDETAIL}/number`);
  return res.json();
}
export async function teacherDetailList() {
  const res = await fetch(`${API_TEACHERDETAIL}/all`);
  return res.json();
}
export async function teacherOneDetail(id) {
  const res = await fetch(`${API_TEACHERDETAIL}/detail/${id}`);
  return res.json();
}
export async function teacherDetailGetNameById(id) {
  const res = await fetch(`${API_TEACHERDETAIL}/getNameById?id=${id}`);
  return res.text();
}
export async function teacherDetailCreateOne(data) {
  const res = await fetch(`${API_TEACHERDETAIL}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function teacherDetailUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_TEACHERDETAIL}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function teacherDetailDelete(id) {
  const res = await fetch(`${API_TEACHERDETAIL}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function teacherDetailDeleteAll() {
  const res = await fetch(`${API_TEACHERDETAIL}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
