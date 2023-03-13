import { faker } from "@faker-js/faker";
faker.setLocale("zh_CN");
export function randomClasses() {
  return {
    grade: faker.date.past().getFullYear(),
    speciality: faker.word.adjective(),
    name: faker.word.adjective(),
    description: faker.lorem.paragraph(),
  };
}
