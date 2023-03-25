import { API_GOODAPARTMENT } from "../constant/api";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function goodApartmentNumber() {
  const res = await fetch(`${API_GOODAPARTMENT}/number`);
  return res.json();
}
export async function goodApartmentList() {
  const res = await fetch(`${API_GOODAPARTMENT}/all`);
  return res.json();
}
export async function goodApartmentDetail(id) {
  const res = await fetch(`${API_GOODAPARTMENT}/detail/${id}`);
  return res.json();
}
export async function goodApartmentCreateOne(data) {
  const res = await fetch(`${API_GOODAPARTMENT}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function goodApartmentUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_GOODAPARTMENT}/update/${id}`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function goodApartmentDelete(id) {
  const res = await fetch(`${API_GOODAPARTMENT}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function goodApartmentDeleteAll() {
  const res = await fetch(`${API_GOODAPARTMENT}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
