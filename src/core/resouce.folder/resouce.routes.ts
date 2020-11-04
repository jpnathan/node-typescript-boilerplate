import { Router } from 'express';

const route = Router();

route.get('/test', (req, res) => {
  return res.status(200).json({ status: true, message: 'Router is ok' });
});

export default route;
