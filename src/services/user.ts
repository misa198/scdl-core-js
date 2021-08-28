import { User } from "../@types/user";

import { getSingleItemInfo } from "./base-info";

export const getUser = async (clientId: string, url: string): Promise<User> => {
  try {
    const user = (await getSingleItemInfo(clientId, url)) as User;
    return user;
  } catch (e) {
    throw "Invalid url";
  }
};
