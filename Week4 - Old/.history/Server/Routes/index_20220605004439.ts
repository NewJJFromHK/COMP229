import express from 'express';
const router = express.Router();

/* GEDisplay home page. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET home page. */
router.get('/home', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET  page. */
router.get('/home', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'About', page: 'about' });
});

export default router;