import { faker } from "@faker-js/faker";
import { getDate } from "../../util/useDate";
faker.setLocale("zh_CN");

export function randomTeacherDetail() {
  return {
    gender: faker.name.sexType() === "male" ? "男" : "女",
    entryDate: getDate(faker.date.past()),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    salary: faker.datatype.number({
      min: 10,
      max: 3000,
    }),
    reward: faker.datatype.number({
      min: 1000,
      max: 30000,
    }),
    birthDate: getDate(
      faker.date.between("1980-01-01T00:00:00.000Z", "2003-01-01T00:00:00.000Z")
    ),
    teachingQuality: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    research: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    politicalIdeology: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    practical: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    discipline: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    comment: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    description: faker.lorem.paragraph(),
  };
}
