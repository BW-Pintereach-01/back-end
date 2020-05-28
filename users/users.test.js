const request = require('supertest')
const server = require('../api/server')
const db = require('../data/dbConfig')

beforeEach(async () => {
  return db.migrate.rollback()
    .then(() => db.migrate.latest())
});

test('POST /api/users/register to be successful', async () => {
  const res = await request(server)
    .post('/api/auth/register')
    .send({username: "devin", password: 'passy'})
    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({ message: 'Registration Success!' })
    // res has both body and status etc
    // console.log(res.body)
})

test('POST /api/users/login to be successful', async () => {
  // creating user instead of seeding
  // end to end test
  const register = await request(server)
    .post('/api/auth/register')
    .send({username: "devin", password: 'passy'})
  const res = await request(server)
    .post('/api/auth/login')
    .send({ username: 'devin', password: 'passy'})
  expect(res.status).toBe(200)
  expect(res.body).toHaveProperty('token')
  // console.log(res.body)
})

