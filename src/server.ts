import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.route";
import { Request, Response } from "express";
import axios from "axios"; // Import Axios
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  console.log
  res.send("Hello World!"); // Send a simple message in response
});     



app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});