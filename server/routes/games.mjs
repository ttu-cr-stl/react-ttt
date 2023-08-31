import express from "express"
import db from "../db/conn.mjs"

const router = express.Router()

router.get("/", async (_req, res) => {
    let collection = await db.collection("games");
    let results = await collection.find({})
        .limit(50)
        .toArray();

    res.send(results).status(200);
})

router.post("/", async (req, res) => {
    let collection = await db.collection("games");
    let newGame = req.body;
    let result = await collection.insertOne(newGame);
    console.log(result);
    res.send(result).status(204);
})

export default router;