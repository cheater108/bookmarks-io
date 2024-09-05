import jwt from "jsonwebtoken";

async function isAuthorizedUser(req, res, next) {
    try {
        const token = req.get("Authorization")?.slice(7);
        const payload = jwt.verify(token, "jfejdmd");
        req.user = payload;
        next();
    } catch (err) {
        next(err);
    }
}

export { isAuthorizedUser };
