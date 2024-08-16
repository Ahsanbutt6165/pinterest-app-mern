import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./database/db.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloud_Api,
  api_secret: process.env.Cloud_Secret,
});

const app = express();

const PORT = process.env.PORT || 3000;

//using middlewares
app.use(express.json());
app.use(cookieParser());

// importing routes
import userRoutes from "./routes/userRoutes.js";
import pinRoutes from "./routes/pinRoutes.js";

// using routes
app.use("/api/user", userRoutes);
app.use("/api/pin", pinRoutes);

// for hosting frontend and backend on same port
// const __dirname = path.resolve("/Users/hp/Desktop/mern-pinterest");

// app.use(express.static(path.join(__dirname, "/client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectToMongo();
});
