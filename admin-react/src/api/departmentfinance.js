import { API_DEPARTMENTFINANCE } from "../constant/api";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function departmentFinanceNumber() {
  const res = await fetch(`${API_DEPARTMENTFINANCE}/number`);
  return res.json();
}
export async function departmentFinanceList() {
  const res = await fetch(`${API_DEPARTMENTFINANCE}/all`);
  return res.json();
}
export async function departmentFinanceDetail(id) {
  const res = await fetch(`${API_DEPARTMENTFINANCE}/detail/${id}`);
  return res.json();
}
export async function getByDepartmentId(id) {
  const res = await fetch(`${API_DEPARTMENTFINANCE}/department/${id}`);
  return res.json();
}
export async function departmentFinanceCreateOne(data) {
  const res = await fetch(`${API_DEPARTMENTFINANCE}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function departmentFinanceUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_DEPARTMENTFINANCE}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function departmentFinanceDelete(id) {
  const res = await fetch(`${API_DEPARTMENTFINANCE}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function departmentFinanceDeleteAll() {
  const res = await fetch(`${API_DEPARTMENTFINANCE}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
