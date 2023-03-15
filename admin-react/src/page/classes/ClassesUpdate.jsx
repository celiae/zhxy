import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import ClassesForm from "./ClassesForm";
import { classesDetail, classesUpdateOne } from "../../server/classes";
export default function ClassesUpdate() {
  const { id } = useParams();
  const { data, status } = useQuery(["classesDetail", id], () =>
    classesDetail(id)
  );
  const [form, setForm] = useState(data);
  useEffect(() => {
    setForm(data);
  }, [data]);
  if (status === "loading") return <Loading />;
  return (
    <ClassesForm form={form} setForm={setForm} submit={classesUpdateOne} />
  );
}
