import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn";
import postRouter from "./routes/post";
import commentRouter from "./routes/post";
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors())
app.use("/post", postRouter);
// app.use("/comment", commentRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(
      "Failed to start server due to mongodb connection issue: ",
      error
    );
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});
