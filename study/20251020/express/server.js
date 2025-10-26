import express from "express";
import postRoutes from "./routes/post.route.js";

const app = express();

app.use(express.json());

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
//   res.end("OK!");
// });

app.get("/", (req, res) => {
  res.send("OK!");
});

app.get("/users", (req, res) => res.send("모든 사용자 목록"));
app.post("/users", (req, res) => res.send("사용자 생성"));
app.get("/users/:id", (req, res) =>
  res.send(`Id: ${req.params.id} 사용자 조회`)
);
app.use("/api/v1/posts", postRoutes);

// server.listen(3000, () => {
//   console.log("OK server was stated on 3000!");
// });

app.listen(3000, () => {
  console.log("Express server is running on 3000!");
});
