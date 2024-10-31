import express from "express";
import bodyParser from "body-parser";
import mobilRoutes from "./routes/mobil.js";
import todoRoutes from "./routes/todo.js"



const app = express();
const port = 3000;

app.use("/mobil", mobilRoutes);
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  console.log(["GET ROUTE"]);
  res.send("Selamat Imam Dwi Yan Permana");
});

app.use(bodyParser.json());

app.listen(port, () =>
  console.log(`server berjalan di port : http://localhost:${port}`)
);