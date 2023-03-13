import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import DepartmentForm from "../../components/form/DepartmentForm";
import { departmentDetail, departmentUpdateOne } from "../../server/department";
import { getDateTime } from "../../util/useDate";
export default function DepartmentUpdate() {
  const { id } = useParams();
  const { data, status } = useQuery(["departmentDetail", id], () =>
    departmentDetail(id)
  );
  if (status === "loading") return <Loading />;
  const [form, setForm] = useState(data);
  useEffect(() => {
    const date = getDateTime();
    setForm({ ...form, modifyTime: date });
  }, []);
  return (
    <DepartmentForm
      form={form}
      setForm={setForm}
      submit={departmentUpdateOne}
    />
  );
}
