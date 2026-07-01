import app from "./app.js";
import connectDB from "./config/db.js";

app.get('/', (req, res) => {
    res.send("API with Express and MongoDB!");
});

connectDB();

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});