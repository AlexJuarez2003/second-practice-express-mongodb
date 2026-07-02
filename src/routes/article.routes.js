import { Router } from "express";
import { getArticles, getArticle, createArticle, updateArticle, deleteArticle } from "../controllers/article.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";
import { isAdmin } from "../middlewares/authentication.middleware.js";

const router = Router();

router.get('/articles', verifyToken, getArticles);
router.get('/articles/:id', verifyToken, getArticle);
router.post('/articles', verifyToken, isAdmin, createArticle);
router.put('/articles/:id', verifyToken, isAdmin, updateArticle);
router.delete('/articles/:id', verifyToken, isAdmin, deleteArticle);

export default router;