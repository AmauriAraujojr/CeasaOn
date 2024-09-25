import App from "./app";
import "dotenv/config";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("database is connected");
    const PORT = process.env.PORT || 3000;
    App.listen(PORT, () => {
      console.log(`Server is running on ${PORT} `);
    });
  })
  .catch((err) => console.log(err));
