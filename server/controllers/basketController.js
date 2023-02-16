const {Device,BasketDevice} = require('../models/models')
class BacketController {
    async create(req, res, next) {
        let {userId,deviceId} = req.body
        const Basket = await BasketDevice.create({userId, deviceId})
        return res.json(Basket)
    }

    async getAll(req, res) {
        let {userId} = req.query
        const Basket = await BasketDevice.findAll({where:{userId}})
        return res.json(Basket)
    }
}

module.exports = new BacketController()