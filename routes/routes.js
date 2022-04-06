const express = require('express');
const router = express.Router();
const {Surveys, Scores, Users} = require('../models/model.js');
const cors = require('cors');

router.use(cors({
    origin:'*'
}));

//Post Method for Surveys
router.post('/newsurvey', async (req, res) => {

    const data = new Surveys({
        question: req.body.question,
        comment: req.body.comment,
    });
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    };
});

//Post Method for Scores
router.post('/:id', async (req, res) => {

    const data = new Scores({
      surveyID : req.params.id,
      results : [{
          score : req.body.score,
          comment : req.body.comment,
          ip : req.body.ip
      }]
    });
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    };
});

//Get all Method for Surveys
router.get('/surveys', async (req, res) => {
    try{
        const data = await Surveys.find();
        res.json(data);
        }
    catch(error){
        res.status(500).json({message: error.message});
    };
});

//Get all Method for Scores
router.get('/formscores', async (req, res) => {
    try{
        const data = await Scores.find();
        res.json(data);
        }
    catch(error){
        res.status(500).json({message: error.message});
    };
});

//Get by ID Method
router.get('/getOne/:id', async (req, res, next) => {
    try{
        const data = await Scores.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    };
});

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(id, updatedData, options);

        res.send(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    };
});

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Scores.findByIdAndDelete(id);
        res.send(`${data.name} has been deleted from the database`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    };
});


module.exports = router;