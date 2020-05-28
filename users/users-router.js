const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/", (req, res) => {
  // console.log('on get', req.jwt)
  Users.find()
    .then(users => {
      res.status(200).json({ users, jwt: req.jwt });
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Users.findById(id)
  .then(user => {
    if (user) {
      res.status(200).json({data: user});
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get user', err });
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Users.findById(id)
  .then(article => {
    if (article) {
      Users.update(changes, id)
      .then(updatedUser => {
        res.status(200).json(updatedUser);
      });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update user', err });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Users.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({error: "User with ID does not exist"});
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: "Server error deleting"})
  })
});

module.exports = router;