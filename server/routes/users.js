import { Router } from "express";
import { handleLogin, handleSignUp } from "../controllers/users.js";

const route = Router();

route.post("/login", handleLogin);

route.post("/signup", handleSignUp);

route.post("/logout", function (req, res, next) {});

export default route;
