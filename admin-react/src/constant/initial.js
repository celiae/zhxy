import { getDateTime } from "../util/useDate";

export const lab = {
  name: "",
  description: "",
  failedNum: 200,
  successNum: 300,
  deviceCondition: 50,
  deviceCost: 15532.53,
  projectCost: 55321.23,
  workload: 15,
  location: "",
};

export const student = {
  lab: {
    id: 0,
  },
  avatar: "",
  firstname: "",
  lastname: "",
  password: "",
};
export const studentdetail = {
  gender: "",
  grade: "",
  classes: "",
  birthDate: "2000-01-01",
  picture: "",
  description: "",
  studyNum: 0,
  sportNum: 0,
  communicationNum: 0,
  competitionNum: 0,
  licenseNum: 0,
  handsNum: 0,
};

export const teacher = {
  labId: "0",
  departmentId: "0",
  avatar: "",
  firstname: "",
  lastname: "",
  birthDate: "2000-01-01",
  password: "",
  jobTitle: "教师",
};

export const teacherdetail = {
  gender: "男",
  entryDate: "2020-01-01",
  email: "",
  phone: "",
  salary: "",
  reward: "",
  teachingQuality: "",
  research: "",
  politicalIdeology: "",
  practical: "",
  discipline: "",
  comment: "",
  description: "",
};

export const lesson = {
  name: "",
  teacher: {
    id: "",
  },
  type: "必修",
  hours: "",
};

export const department = {
  name: "",
  description: "",
  manager: "",
  budget: "",
  parentDepartmentId: "",
  createTime: "",
  modifyTime: getDateTime(),
};

export const SCORE = {
  id: {},
  student: {
    id: "",
  },
  lesson: {
    id: "",
  },
  score: "",
};
