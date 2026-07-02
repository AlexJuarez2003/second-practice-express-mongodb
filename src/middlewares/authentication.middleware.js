export const  isAdmin = (req, res, next) => {

    const { role } = req;

    if (role !== "admin") {
        return res.status(401).json({ message: "Unauthorized" });
    }

    next();
};