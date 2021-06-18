import * as express from 'express';

export const router = express.Router();

const admin = {
  firstName: 'Jos',
  lastName: 'Verstappen',
  email: 'Jos.de.bos@verstappen.nl',
  authorities: ["ROLE_ADMIN", "ROLE_USER"]
}

const basic = {
  firstName: 'Max',
  lastName: 'Verstappen',
  email: 'max@verstappen.nl',
  authorities: ["ROLE_USER"]
}

const users: { [id: string]: any } = {
  admin,
  user: basic,
}

router.get('/', (req, res) => {
  res.send(basic);
});
