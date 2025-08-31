import { UserPositionEnum } from "../enums/users.enum.ts";
import type { UserDTO } from "../types/users.types.ts";

export const usersMock: UserDTO[] = [
  {
    id: 1,
    username: "Philip",
    firstName: "Petrov",
    password: "123",
    position: UserPositionEnum.Developer,
  },
  {
    id: 2,
    username: "Ron",
    firstName: "Weasley",
    password: "123",
    position: UserPositionEnum.Developer,
  },
  {
    id: 3,
    username: "Harry",
    firstName: "Potter",
    password: "123",
    position: UserPositionEnum.Lead,
  },
  {
    id: 4,
    username: "Hermione",
    firstName: "Granger",
    password: "123",
    position: UserPositionEnum.Lead,
  },
];
