import { faker } from "@faker-js/faker";
faker.setLocale("zh_CN");
import { getDateTime } from "../../util/useDate";

export function randomTeacher() {
  return {
    lab: { id: 0 },
    department: { id: 0 },
    avatar: faker.image.avatar(),
    firstname: faker.word.adjective(),
    lastname: faker.word.adjective(),
    password: faker.internet.password(),
    jobTitle: "助教",
    lastLogin: getDateTime(faker.date.past()),
  };
}
