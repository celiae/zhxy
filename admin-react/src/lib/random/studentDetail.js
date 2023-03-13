import { faker } from "@faker-js/faker";
faker.setLocale("zh_CN");
import { getDate } from "../../util/useDate";

export function randomStudentDetail() {
  return {
    gender: faker.name.sexType() === "male" ? "男" : "女",
    birthDate: getDate(
      faker.date.between("1980-01-01T00:00:00.000Z", "2003-01-01T00:00:00.000Z")
    ),
    classes: faker.helpers.arrayElement([
      "19计科本5",
      "20计科本5",
      "21计科本5",
    ]),
    grade: faker.date.past().getFullYear(),
    labId: "0",
    phone: faker.phone.number(),
    email: faker.internet.email(),
    wechat: faker.word.adjective(),
    qq: faker.word.adjective(),
    description: faker.lorem.paragraph(),
    studyNum: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    sportNum: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    communicationNum: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    competitionNum: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    licenseNum: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    handsNum: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  };
}
