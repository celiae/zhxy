import { faker } from "@faker-js/faker";
import { API_STUDENTDETAIL } from "../constant/api";
faker.setLocale("zh_CN");
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function studentDetailNumber() {
  const res = await fetch(`${API_STUDENTDETAIL}/number`);
  return res.json();
}
export async function studentDetailList() {
  const res = await fetch(`${API_STUDENTDETAIL}/all`);
  return res.json();
}
export async function studentOneDetail(id) {
  const res = await fetch(`${API_STUDENTDETAIL}/detail/${id}`);
  return res.json();
}
export async function studentDetailCreateOne(data, id) {
  let obj = {};
  Object.assign(obj, data);
  obj.id = id;
  const res = await fetch(`${API_STUDENTDETAIL}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function studentDetailUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_STUDENTDETAIL}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function studentDetailDelete(id) {
  const res = await fetch(`${API_STUDENTDETAIL}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function studentDetailDeleteAll() {
  const res = await fetch(`${API_STUDENTDETAIL}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
