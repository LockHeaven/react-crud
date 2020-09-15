const router = require('express').Router();
let City = require('../models/ciudad.model');

router.route('/').get((req, res) => {
  City.find()
    .then(city => res.json(city))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  const newCity = new City({
    name,
    description,
  });

  newCity.save()
  .then(() => res.json('City added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  City.findById(req.params.id)
    .then(city => res.json(city))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;