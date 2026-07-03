import express from "express";
import userRoutes from "./routes/user.routes.js";
import articleRoutes from "./routes/article.routes.js";
import clientRoutes from "./routes/client.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(articleRoutes);
app.use(clientRoutes);

export default app;