import { faker } from "@faker-js/faker";
import { API_STUDENTMEDIA } from "../constant/api";
faker.setLocale("zh_CN");
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function studentMediaNumber() {
  const res = await fetch(`${API_STUDENTMEDIA}/number`);
  return res.json();
}
export async function studentMediaList() {
  const res = await fetch(`${API_STUDENTMEDIA}/all`);
  return res.json();
}
export async function studentOneDetail(id) {
  const res = await fetch(`${API_STUDENTMEDIA}/detail/${id}`);
  return res.json();
}
export async function studentOneByStudentId(id) {
  const res = await fetch(`${API_STUDENTMEDIA}/search?studentId=${id}`);
  return res.json();
}
export async function studentMediaCreateOne(formData) {
  const res = await fetch(`${API_STUDENTMEDIA}/upload`, {
    method: "POST",
    body: formData,
  });
  return res.json();
}
export async function studentMediaUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_STUDENTMEDIA}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function studentMediaDeleteByStudentId(studentId) {
  const res = await fetch(
    `${API_STUDENTMEDIA}/delete/byStudentId/${studentId}`,
    {
      method: "DELETE",
    }
  );
  return res.json();
}
export async function studentMediaDelete(id) {
  const res = await fetch(`${API_STUDENTMEDIA}/delete/byId/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function studentMediaDeleteAll() {
  const res = await fetch(`${API_STUDENTMEDIA}/delete/all`, {
    method: "DELETE",
  });
  return res.json();
}
