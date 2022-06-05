import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: express.Request, res: express.Response, next) 
{
  res.send('respond with a resource');
});

export default router;
