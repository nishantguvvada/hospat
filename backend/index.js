const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {

    try {

        const allPatients = await prisma.patient.findMany();

        return res.status(200).json({data: allPatients});

    } catch(err) {

        return res.status(400).json({error: err});

    }

});

app.post("/add", async (req, res) => {

    try {
        
        const patient = await prisma.patient.create({
            data: {
                name: req.body.name,
                age: req.body.age,
                gender: req.body.gender
            }
        });

        return res.status(200).json({message: "Patient created"});

    } catch(err) {

        return res.status(403).json({error: err});

    }
});

app.listen(3000);