const express = require("express");
const router = express.Router();
const { Surveys, Scores } = require("../models/model.js");
const cors = require("cors");

router.use(
  cors({
    origin: "*",
  })
);

//Post Method for Surveys
router.post("/newsurvey", async (req, res) => {
  const data = new Surveys({
    name: req.body.name,
    question: req.body.question,
    comment: req.body.comment,
  });

  try {
    const dataToSave = await data.save();
    // create a scores for current survey
    const form = new Scores({
      surveyID: dataToSave._id,
      results: [],
    });
    await form.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method for Surveys
router.get("/surveys", async (req, res) => {
  try {
    const data = await Surveys.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get all Method for Scores
router.get("/formscores", async (req, res) => {
  try {
    const data = await Scores.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/surveys/:id", async (req, res) => {
  try {
    const data = await Surveys.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    //get previous
    const dataToUpdate = await Scores.findOne({ surveyID: req.params.id });
    //update this constant
    dataToUpdate.results.push(req.body.results[0]);

    const id = dataToUpdate._id;
    const options = { new: true };

    const result = await Scores.findByIdAndUpdate(id, dataToUpdate, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/survey/:id", async (req, res) => {
  try {
    const data = await Surveys.findByIdAndDelete(req.params.id);
    res.send(`Survey with id ${data._id} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
