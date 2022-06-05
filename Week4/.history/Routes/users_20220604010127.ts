import express from 'express';
import router = express.Router();

/* GET users listing. */
router.get('/', function(req: express.Request, res, next) 
{
  res.send('respond with a resource');
});

export default router;
