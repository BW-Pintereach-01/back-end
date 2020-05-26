const router = require("express").Router();
const Articles = require('./articles-model.js');
// const restrict = require('../auth/auth-middleware.js');

router.post('/',validateArticle,(req,res) => {
    const {users_id, title, author, link,} = req.body;
    Articles.insert({users_id, title, author, link,})
        .then(article => res.status(200).json(article))
        .catch(err => {
            console.log(err)
        }) 
        .catch(err => {
            console.log(err);
            res.status(500).json({error:'Sorry error adding article'})
        })
})

function validateArticle(req, res, next) {
    const article = req.body;
    if (Object.keys(article).length > 0) {
      if(article.link && article.author) {
        next();
      } else {
        res.status(400).json({
          message: 'Missing required field, please enter link and author'
        })
      }
    } else {
      res.status(400).json({
        message: 'Missing post data'
      })
    }
  }

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    Articles.remove(id)
    .then(deleted => {
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({error: "Article with ID does not exist"});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: "Server error deleting"})
    })
})

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
  router.put('/:id', validateArticle, (req, res) => {
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
