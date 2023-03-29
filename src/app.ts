import express from "express";
import "express-async-errors";
import handleError from "./errors/handleError";
import customerRoutes from "./routes/customers.routes";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/customers", customerRoutes);

app.use(handleError);

export default app;
