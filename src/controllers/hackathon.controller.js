import { Hackathon } from '../models/hackathon';

export const getHackathons = (req, res) => {
  Hackathon.findAll({})
    .then((data) => { res.send({ data }); })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};

export const createHackathon = (req, res) => {
  const {
    name, problem_statement, start_time, end_time,
  } = req.body;
  Hackathon.create({ name, problem_statement, start_time })
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.sendStatus(500);
    });
};
