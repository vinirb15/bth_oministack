const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/index');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .set('Content-Type', 'application/json')
            .send({
                name: "asd",
                email: "asd@aalksjd.com",
                whatsapp: "12940028922",
                city: "São Paulo",
                uf: "SP"
            })
        console.log(response.body)

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})