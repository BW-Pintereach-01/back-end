const express = require('express');

const Articles = require('./articles-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Articles.findAllArticles()
  .then(articles => {
    res.status(200).json({articles});
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get articles' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Articles.findArticleById(id)
  .then(article => {
    if (article) {
      res.status(200).json({data: article});
    } else {
      res.status(404).json({ message: 'Could not find article with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get article', err });
  });
});

router.get('/user/:id', (req, res) => {
  const { id } = req.params;
  
  Articles.findUserArticles(id)
  .then(([articles]) => {
    if (articles) {
      const articleArr = []
      res.status(200).json({ articles: [...articleArr, articles] });
    } else {
      res.status(404).json({ message: 'User has no articles in the Database' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get article', err });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Articles.findArticleById(id)
  .then(article => {
    if (article) {
      Articles.update(changes, id)
      .then(updatedArticle => {
        res.json(updatedArticle);
      });
    } else {
      res.status(404).json({ message: 'Could not find article with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update article', err });
  });
});

module.exports = router;