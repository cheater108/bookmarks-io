import { Router } from "express";
import { handleLogin, handleSignUp } from "../controllers/users.js";

const route = Router();

route.post("/login", handleLogin);

route.post("/signup", handleSignUp);

export default route;
