import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Reqiu, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
