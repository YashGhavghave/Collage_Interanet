import express from "express";
import NewUser from "./Routes/CreateUser.route.js";
import Login from "./Routes/login.route.js"
import { db_connection } from "./Database/db.connection.js";
import helmet from 'helmet';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())
app.use(helmet())

try {
  if (!db_connection) {
    console.log("Connection String Not Found");
    exit(1);
  }
  db_connection().then(console.log("Database Connected Successfully"));
} catch (error) {
  console.log(error);
}

app.get("/api", (req, res) => {
  res.json({
    message:"Server is Working"
  }).status(200);
});

app.use("/api", NewUser);
app.use("/api", Login);

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
