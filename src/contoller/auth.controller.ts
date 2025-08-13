import authService from "../service/auth.service";
import { Request, Response } from "express";

class AuthController {
  public async auth(req: Request, res: Response) {
    const { address } = req.body;
    const userExist = await authService.fetchUser(address);
    if (!userExist) {
      // console.log("!1");
      const newUser = authService.createUser(address);
      res.status(201).json({
        status: true,
        data: newUser,
        message: "user ceated successfully",
      });
      return;
    }
    res.status(200).json({
      status: true,
      data: userExist,
      message: "user fetched successfully",
    });
    return;
  }
}

export default new AuthController();
