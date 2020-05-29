const request = require('supertest')
const server = require('../api/server');
const db = require("../data/dbConfig");


describe('articles tests', () => {
    user = {username: "test", password: "password"};


describe("TEST REGISTER", () => {

	test("Registering endpoints works", async() => {
		const newUser = { username:"pat", password: "pass"}
		const res = await request(server).post("/auth/register").send(newUser)

	})

})

    beforeEach(async () => {
        // this function executes and clears out the table before each test
        await db('users').truncate();
      });

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
      

    describe('status stuff', () => {
        // it("should return status 200", async () => {
        //     let token;
        //     await request(server).post('/api/auth/register').send(user).then(res => {token = res.body.token});
        //     console.log(token);
        //     return await request(server).get('/api/articles').set({authorization: token}).then(res => expect(res.status).toBe(200));
        // });

        it("should return status 404", async () => {
            let token = 12;
            //await request(server).post('/api/auth/register').send(user).then(res => {token = res.body.token});
            //console.log(token);
            return await request(server).get('/api/articles').set({authorization: token}).then(res => expect(res.status).toBe(401));
        });
    })

})
});