import { Router } from "express";
import { getArticles, getArticle, createArticle, updateArticle, deleteArticle } from "../controllers/article.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get('/articles', verifyToken, getArticles);
router.get('/articles/:id', getArticle);
router.post('/articles', createArticle);
router.put('/articles/:id', updateArticle);
router.delete('/articles/:id', deleteArticle);

export default router;