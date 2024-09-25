import { Router } from "express";
import { userController } from "../controllers";
import { idExists } from "../middlewares/verifyUserId.middleware";
import { verifyCpf } from "../middlewares/verifyUserCpf.middleware";

const userRouter: Router = Router();

userRouter.post("",verifyCpf, userController.create);

userRouter.use("/:id", idExists);

userRouter.patch(
  "/:id",verifyCpf,

  userController.update
);

userRouter.delete(
  "/:id",

  userController.destroy
);

export { userRouter };
