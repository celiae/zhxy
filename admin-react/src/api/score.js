import { API_SCORE } from "../constant/api";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export async function scoreNumber() {
  const res = await fetch(`${API_SCORE}/number`);
  return res.json();
}
export async function scoreList() {
  const res = await fetch(`${API_SCORE}/all`);
  return res.json();
}
export async function scoreGetNameByIds(studentId, lessonId) {
  const res = await fetch(
    `${API_SCORE}/search?studentId=${studentId}&lessonId=${lessonId}`
  );
  return res.json();
}
export async function scoreCreateOne(data) {
  const res = await fetch(`${API_SCORE}/createOne`, {
    headers: jsonHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function scoreUpdateOne(data) {
  let obj = {};
  Object.assign(obj, data);
  const id = obj.id;
  delete obj.id;
  const res = await fetch(`${API_SCORE}/update`, {
    headers: jsonHeaders,
    method: "PUT",
    body: JSON.stringify(obj),
  });
  return res.json();
}
export async function scoreDelete(id) {
  const res = await fetch(`${API_SCORE}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function scoreDeleteAll() {
  const res = await fetch(`${API_SCORE}/deleteAll`, {
    method: "DELETE",
  });
  return res.json();
}
