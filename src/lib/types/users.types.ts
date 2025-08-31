import { UserPositionEnum } from "../enums/users.enum.ts";

export interface UserDTO {
  id: number;
  username: string;
  firstName: string;
  middleName?: string;
  lastName?: string;
  password: string;
  position?: UserPositionEnum;
}
