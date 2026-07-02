import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token not provided" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Token not provided" });
    }

    try {
        const { role } = jwt.verify(token, process.env.JWT_SECRET);
        req.role = role;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ error: "Token expired" });
        }
        if (error.name === "JsonWebTokenError") {
            return res.status(400).json({ error: "Invalid token" });
        }
        return res.status(500).json({ error: "Error verifying token" });
    }
};