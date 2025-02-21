import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.route";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


async function call(){
  const updateDetails = await fetch("https://api.github.com/users/defunkt");
  const data = await updateDetails.json();  
}
// dzfbxgfn fb
call()
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
