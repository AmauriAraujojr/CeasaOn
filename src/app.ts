import "express-async-errors";
import express,{ Application } from "express";
import { userRouter } from "./routes/user.router";
import { handleError } from "./middlewares/handleError.middleware";

import cors from "cors"

const App: Application = express();
App.use(cors())
App.use(express.json());

App.use("/users", userRouter);



App.use(handleError);

export default App;