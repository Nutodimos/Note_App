import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request method is ${req.method} and request URL is ${req.url}`);
  next();
});

app.use("/api/notes", notesRoutes);
app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
