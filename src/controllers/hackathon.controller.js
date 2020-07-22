import { Hackathon } from '../models/hackathon';

export const getHackathons = (req, res) => {
  Hackathon.findAll({})
    .then((data) => { res.send(data); })
    .catch(err => {
      console.error(err);
      res.status(500);
    });
};
