const router = require('express').Router();

let Mentor = require('../models/mentors.models');

router.route('/').get((req, res) => {
    Mentor.find()
    .then(mentors => res.json(mentors))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    
    const newMentor = new Mentor({name});

    newMentor.save()
    .then(() => res.json('Mentor Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Mentor.findById(req.params.id)
    .then(mentor => {
      mentor.name = req.body.name;
  
      mentor.save()
      .then(() => res.json("Task Updated!"))
      .catch(err => res.status(400).json('Error : ' + err));
    })
    .catch(err => res.status(400).json('Error : ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    Mentor.findById(req.params.id)
    .then(mentor => res.json(mentor))
    .catch(err => res.status(400).json('Error : ' + err))
  });
  
  router.route('/:id').delete((req, res) => {
    Mentor.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task deleted'))
    .catch(err => res.status(400).json('Error : ' + err))
  });

module.exports = router;