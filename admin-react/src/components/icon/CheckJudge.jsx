import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
export default function CheckJudge({ config }) {
  if (config === true) return <BsCheck2 size={23} />;
  return <IoClose size={23} />;
}
