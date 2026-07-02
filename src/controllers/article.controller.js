import Article from "../models/article.model.js";

export const getArticles = async (req, res) => {
    try {

        const { role } = req;

        if (role !== "admin") {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const articles = await Article.find();

        res.status(200).json(articles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);

        if (!article) {
            return res.status(400).json({ message: "Article not found" });
        }

        res.status(200).json(article);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createArticle = async (req, res) => {
    try {
        const { name, price, stock } = req.body;

        if (!name || !price || !stock) {
            return res.status(400).json({ message: "Required fields: name, price and stock"});
        }

        const article = new Article({
            name,
            price,
            stock
        });

        await article.save();

        res.status(201).json({ newArticle: article});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateArticle = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, price, stock } = req.body;

        if (!Object.keys(req.body).length) {
            return res.status(400).json({ message: "At least one field is required" });
        }

        const article = await Article.findByIdAndUpdate(
            id, 
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.status(200).json({ message: "Article updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }    
};

export const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;

        const article = await Article.findByIdAndDelete(id);

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.status(200).json({ message: "Article deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};