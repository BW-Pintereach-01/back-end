const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

describe('auth-router', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })

    describe('POST to register', () => {

        it('should return 201 on valid register', () => {
            return request(server)
                .post('/api/auth/register')
                .send({ username: 'testing', password: 'testing' })
                .then(res => {
                    expect(res.status).toBe(201)
            })
        })
        it("should return a 400 error for not inputting bad password", () => {
            return request(server)
                .post("/api/auth/register")
                .send({ username: 'testing', password: 2 })
                .then(res => {
                expect(res.status).toBe(400);
            });
        });
    })
})