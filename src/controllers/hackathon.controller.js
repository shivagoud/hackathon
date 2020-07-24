import { Hackathon } from '../models/hackathon';
import { Registration } from '../models/hackathon';
import { Group } from '../models/hackathon';

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

export const validateHackathon = (req, res, next) => {
  const { id } = req.params;
  const { hackathon, userId } = req.jwtData;
  const now = new Date();

  if(!hackathon) {
    hackathon = await Registration.findOne({
      where: {user_id: userId},
      include: [Group, Hackathon],
    })
    .then(data => {
      // TODO: FIX THIS
      return {
        startTime: Date.now();
        endTime: Date.now();
        groupId: userId
      };

    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    });

    req.jwtData.hackathon = hackathon;
  }

  // Checking if active hackathon
  if(now < hackathon.end_time && now >= hackathon.start_time) {
    return next();
  } else {
    res.sendStatus(404);
  }
}

const loadTestCases = hackathon_id => [];

export const submitCode = (req, res) => {
  const { id } = req.params;
  const { code_text, language } = req.body;
  const { hackathon } = req.jwtData;

  // add entry in submissions
  // run testcases, get result
  // add entry in result
  // update entry in group if best_score

  Submission.create({
    code_url: 'sample_url',
    language,
    group_id: groupId
  })
  .then(submission => loadTestCases(hackathon_id)
    .then(testCases => runCode(submission, testCases))
  )
  .then(results => {
    const score = 0; // calculate
    res.send({data: {results, score});
  });
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
