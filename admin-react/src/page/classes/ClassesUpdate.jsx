import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import DepartmentForm from "../../components/form/DepartmentForm";
import { departmentDetail, departmentUpdateOne } from "../../server/department";
import { getDateTime } from "../../util/useDate";
import { classesDetail } from "../../server/classes";
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
    <ClassesForm
      form={form}
      setForm={setForm}
      submit={departmentUpdateOne}
    />
  );
}
