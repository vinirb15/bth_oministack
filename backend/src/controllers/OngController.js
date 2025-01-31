const connection = require('../database/index');
const crypto = require('crypto');
const generateId = require('../utils/generateUniqueId');


module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response) {
        const /*data*/ { name, email, whatsapp, city, uf } = request.body;

        const id = generateId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}