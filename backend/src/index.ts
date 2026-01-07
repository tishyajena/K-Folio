
import dotenv from "dotenv";
dotenv.config(); // MUST be first

import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import authRouter from "./routes/auth";
import editusernamerouter from "./routes/editusername";
import editbiorouter from "./routes/editbio";
import editavatarrouter from "./routes/editavatar";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   const start = Date.now();
//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     const method = req.method;
//     const url = req.originalUrl;
//     const status = res.statusCode;
//     const ip = req.ip;
//     console.log(`[${new Date().toISOString()}] ${method} ${url} ${status} ${duration}ms ip=${ip}`);
//   });
//   next();
// });

connectDB();

app.get("/", (req:Request,res: Response) => {
  res.json({ message: "Backend Server is running", success: true });
});

app.use("/auth", authRouter);
app.use("/",editavatarrouter)
app.use("/",editbiorouter)
app.use("/",editusernamerouter)



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
