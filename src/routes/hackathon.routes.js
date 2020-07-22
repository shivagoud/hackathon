import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  req.send({
    data: [],
  });
});

export default router;
