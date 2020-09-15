const router = require('express').Router();
let Persona = require('../models/persona.model');

router.route('/').get((req, res) => {
  Persona.find()
    .then(personas => res.json(personas))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const names = req.body.names;
  const lastnames = req.body.lastnames;
  const document = Number(req.body.document);
  const email = req.body.email;
  const phone = req.body.phone;
  const username = req.body.username;
  const password = req.body.password;
  const birthday = Date.parse(req.body.birthday);
  const typedocument = req.body.typedocument;
  const residence = req.body.residence;

  const newPersona = new Persona({
    names,
    lastnames,
    document,
    email,
    phone,
    username,
    password,
    birthday,
    typedocument,
    residence,
  });

  newPersona.save()
  .then(() => res.json('Persona added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Persona.findById(req.params.id)
    .then(persona => res.json(persona))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Persona.findByIdAndDelete(req.params.id)
      .then(() => res.json('Persona deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Persona.findById(req.params.id)
      .then(persona => {
        persona.names = req.body.names;
        persona.lastnames = req.body.lastnames;
        persona.document = Number(req.body.document);
        persona.email = req.body.email;
        persona.phone = req.body.phone;
        persona.username = req.body.username;
        persona.password = req.body.password;
        persona.birthday = Date.parse(req.body.birthday);
        persona.typedocument = req.body.typedocument;
        persona.residence = req.body.residence;
        
        persona.save()
          .then(() => res.json('Persona updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports = router;