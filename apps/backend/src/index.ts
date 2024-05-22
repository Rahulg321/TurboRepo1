import express from "express";
import { BACKEND_URL } from "@repo/common/config";

const app = express();
console.log("backend url is ", BACKEND_URL);

app.get("/", (req, res) => {
  res.json({
    message: "Sended a request",
  });
});

app.get("/url", (req, res) => {
  res.json({
    BACKEND_URL,
  });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
