const express = require("express");
const router = express.Router();
const { Scores, Users } = require("../models/model.js");
const cors = require("cors");

router.use(
  cors({
    origin: "*",
  })
);

//Post Method for Scores
router.post("/postnewscore", async (req, res, next) => {
  const data = new Scores({
    score: req.body.score,
    message: req.body.message,
  });

  try {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3001/form");
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
    // next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Post Method for Users
router.post("/postnewuser", async (req, res, next) => {
  const data = new Users({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3001/form");
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
    // next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method for Scores
router.get("/formscores", async (req, res, next) => {
  try {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const data = await Scores.find();
    res.json(data);
    // next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get all Method for Users
router.get("/users", async (req, res, next) => {
  try {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const data = await Users.find();
    res.json(data);
    // next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res, next) => {
  try {
    const data = await Scores.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`${data.name} has been deleted from the database`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
