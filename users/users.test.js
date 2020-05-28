const request = require('supertest')
const server = require('../api/server')
const db = require('../data/dbConfig')

beforeEach(async () => {
  return db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run())
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

test('Get all users', async () => {
  const res = await request(server)
    .get('/api/users')
  expect(res.status).toBe(200)
  expect(res.body.users).toHaveLength(1)
})

test('Get user id to get individual user', async () => {
  const res = await request(server)
    .get('/api/users/1')
  expect(res.status).toBe(200)
  expect(res.body.data).toHaveProperty('id', 1)
})

test('Edit username on put request', async () => {
  const res = await request(server)
    .put('/api/users/1')
    .send({username: 'april'})
  expect(res.status).toBe(200)
  expect(res.body).toHaveProperty('username', 'april')
})

test('Delete user to not exist in db after delete', async () => {
  const res = await request(server)
    .delete('/api/users/1')
  expect(res.status).toBe(204)
  const resUser = await request(server)
    .get('/api/users/1')
    .then(response => {
      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('message', 'Could not find user with given id.')
    })
})
