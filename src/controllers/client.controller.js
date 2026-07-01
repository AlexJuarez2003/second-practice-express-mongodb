import Client from "../models/client.model.js";

export const getClients = async (req, res) => {
    try {
        const clients = await Client.find();

        res.status(200).json(clients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);

        if (!client) {
            return res.status(400).json({ message: "Client not found" });
        }

        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createClient = async (req, res) => {
    try {
        const { name, phone, address } = req.body;

        if (!name || !phone || !address) {
            return res.status(400).json({ message: "Required fields: name, phone and address"});
        }

        const client = new Client({
            name,
            phone,
            address
        });

        await client.save();

        res.status(201).json({ newClient: client});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateClient = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, phone, address } = req.body;

        if (!Object.keys(req.body).length) {
            return res.status(400).json({ message: "At least one field is required" });
        }

        const client = await Client.findByIdAndUpdate(id, req.body);

        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.status(200).json({ message: "Client updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }    
};

export const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;

        const client = await Client.findByIdAndDelete(id);

        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.status(200).json({ message: "Client deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};