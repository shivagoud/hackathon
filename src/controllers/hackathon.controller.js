import { Hackathon } from '../models/hackathon';

export const getHackathons = (req, res) => {
  Hackathon.findAll({})
    .then((data) => { res.send({ data }); })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};

export const getHackathonDetails = (req, res) => {
  const { id } = req.params;

  Hackathon.findOne({ where: { id } })
    .then(data => {
      if (data === null) {
        res.sendStatus(404);
      } else {
        return TestCase.findAll({
          where: {
            is_public: true,
            hackathon_id: id,
          },
          attributes: [['input', 'output']],
        }).then(test_cases => {
          data.test_cases = test_cases;
          res.send({ data });
        });
      }
    })
    .catch(err => {
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

export const submitCode = (req, res) => {
  res.send('TODO');
};


export const getSubmissionRanking = (req, res) => {
  const { id } = req.params;

  Group.findAll({
    attributes: [['name', 'best_score']],
    order: [['best_score', 'DESC']],
    limit: 10,
    where: { hackathon_id: id },
  })
    .then(top => {
      console.log(top);
      res.send(top);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
};
