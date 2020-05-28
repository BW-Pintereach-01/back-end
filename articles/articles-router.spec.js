const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

describe('articles-router', () => {
    beforeEach(async () => {
        await db('articles').truncate();
    })

    describe('GET /articles', () => {
        it('should return 400 for missing credentials', () => {
            return request(server)
                .get('/api/articles')
                .then(res => {
                    expect(res.status).toBe(400)
                })
        })
    })

    
})