const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function(collection) {
  const router = express.Router();
  // routes go here.

  // index
  router.get('/', (req, res) => {
    collection
        .find()
        .toArray()
        .then((docs) => res.json(docs));
  });

  // SHOW
  router.get('/:id', (req, res) => {
    collection
        .findOne({_id: ObjectID(req.params.id)})
        .then((docs) => res.json(docs));
  });

  // CREATE
  router.post('/', (req, res) => {
    // NEW GAME NAME NEEDS REPLACED!!!!!
    const newGame = req.body;
    collection
    // NEW GAME APPEARS HERE TOO!!!!!
        .insertOne(newGame)
        .then(() => {
          collection
              .find()
              .toArray()
              .then((docs)=> res.json(docs));
        });
  });

  // DESTROY
  router.delete('/:id', (req, res) => {
    collection
        .deleteOne({_id: ObjectID(req.params.id)})
        .then(() => collection.find().toArray())
        .then((docs) => res.json(docs));
  });

  // UPDATE
  router.put('/:id', (req, res) => {
    collection
        .updateOne(
            {_id: ObjectID(req.params.id)},
            {$set: req.body}
        )
        .then(() => collection.find().toArray())
        .then((docs) => res.json(docs));
  });
  return router;
};

module.exports = createRouter;
