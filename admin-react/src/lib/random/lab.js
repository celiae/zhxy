import { faker } from "@faker-js/faker";
faker.setLocale("zh_CN");
export function randomLab() {
  return {
    name: faker.word.adjective(),
    description: faker.lorem.paragraph(),
    failedNum: faker.datatype.number({
      min: 100,
      max: 200,
    }),
    successNum: faker.datatype.number({
      min: 100,
      max: 200,
    }),
    deviceCondition: faker.datatype.number({
      min: 100,
      max: 200,
    }),
    deviceCost: faker.datatype.number({
      min: 100,
      max: 200,
    }),
    projectCost: faker.datatype.number({
      min: 100,
      max: 200,
    }),
    workload: faker.datatype.number({
      min: 100,
      max: 200,
    }),
    location: faker.word.adjective(),
  };
}
