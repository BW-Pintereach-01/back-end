
const request = require('supertest');

const server = require('./server.js');

describe('server', function() {
    it('should run tests', function() {
        expect(true).toBe(true)
    })

    describe('GET /', function() {
        it('should return 200 ok', function() {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should return JSON', function() {
            return request(server).get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
    })
})