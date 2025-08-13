import userModel from "../model/user";
import { UserType } from "@/types";

class AuthService {
  public async fetchUser(address: string): Promise<UserType | null> {
    try {
      const fetchedUser: any = await userModel.findOne({ address });
      return fetchedUser;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  public async createUser(address: string): Promise<UserType | null> {
    try {
      const newUser = new userModel({ address });
      const savedUser: any = await newUser.save();
      return savedUser;
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}

export default new AuthService();
