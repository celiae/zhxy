import { faker } from "@faker-js/faker";
faker.setLocale("zh_CN");
import { getDateTime } from "../../util/useDate";
export function randomStudent() {
  return {
    avatar: faker.image.avatar(),
    firstname: faker.word.adjective(),
    lastname: faker.word.adjective(),
    password: faker.internet.password(),
    lastLogin: getDateTime(faker.date.past()),
  };
}
