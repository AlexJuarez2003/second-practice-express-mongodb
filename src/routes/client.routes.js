import { Router } from "express";
import { getClients, getClient, createClient, updateClient, deleteClient } from "../controllers/client.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";
import { isAdmin } from "../middlewares/authentication.middleware.js";

const router = Router();

router.get('/clients', verifyToken, getClients);
router.get('/clients/:id', verifyToken, getClient);
router.post('/clients', verifyToken, isAdmin, createClient);
router.put('/clients/:id', verifyToken, isAdmin, updateClient);
router.delete('/clients/:id', verifyToken, isAdmin, deleteClient);

export default router;