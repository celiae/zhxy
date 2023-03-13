import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import LessonForm from "../../components/form/LessonForm";
import { lessonDetail, lessonUpdateOne } from "../../server/lesson";
export default function LessonUpdate() {
  const { id } = useParams();
  const { data, status } = useQuery(["lessonDetail", id], () =>
    lessonDetail(id)
  );
  if (status === "loading") return <Loading />;
  const [form, setForm] = useState(data);
  return <LessonForm form={form} setForm={setForm} submit={lessonUpdateOne} />;
}
