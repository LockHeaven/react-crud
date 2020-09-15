const router = require('express').Router();
let Document = require('../models/documento.model');

router.route('/').get((req, res) => {
  Document.find()
    .then(document => res.json(document))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  const newDocument = new Document({
    name,
    description,
  });

  newDocument.save()
  .then(() => res.json('Document added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Document.findById(req.params.id)
    .then(document => res.json(document))
    .catch(err => res.status(400).json('Error: ' + err));
});

  
  
module.exports = router;