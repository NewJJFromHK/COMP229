import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: express.Request, res: express.Response.NextFunction) 
{
  res.send('respond with a resource');
});

export default router;
