import { faker } from "@faker-js/faker";
faker.setLocale("zh_CN");
import { getDateTime } from "../../util/useDate";
export function randomDepartment() {
  return {
    parentDepartment: { id: 0 },
    name: faker.word.adjective(),
    description: faker.lorem.paragraph(),
    manager: faker.word.adjective(),
    budget: faker.datatype.number({
      min: 10000,
      max: 2000000,
    }),
    createTime: getDateTime(faker.date.past()),
    modifyTime: getDateTime(faker.date.past()),
  };
}
