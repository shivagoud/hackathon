import jwt from 'jsonwebtoken';
import uuid from 'uuid/v4';
import { User } from '../../models/user';

const sendAuthFailure = (res) => {
  res.header('WWW-Authenticate', 'Bearer realm="Access to Delta API"');
  res.status(401).send('Unauthenticated request!');
};

export const authenticateRequest = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    return sendAuthFailure(res);
  }

  const token = req.headers.authorization.split(' ').pop();
  jwt.verify(token, process.env.JWT_SECRET, (err, jwtData) => {
    if (err || !jwtData) {
      console.error(err);
      sendAuthFailure(res);
    } else {
      User.findByPk(jwtData.userId, { raw: true })
        .then((user) => {
          req.jwtData = { user, ...jwtData };
          return next();
        }).catch((e) => {
          console.error(e);
          sendAuthFailure(res);
        });
    }
  });

  return 0;
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } })
    .then(user => {
      if (user && user.correctPassword(password)) {
        console.log('password validated');
        const token = jwt.sign({
          userId: user.id,
        }, process.env.JWT_SECRET);
        res.send({ data: { token } });
      } else {
        res.send({ data: 'invalid credentials' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500);
    });
};

export const registerUser = (req, res) => {
  const { email, password } = req.body;

  User.create({
    id: uuid(),
    email,
    password,
  })
    .then((data) => {
      console.log(data);
      res.send({ data });
    })
    .catch(err => {
      console.error(err);
      res.status(500);
    });
};

export default authenticateRequest;
