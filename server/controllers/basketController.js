const uuid = require('uuid')
const path = require('path');
const {Device, DeviceInfo,Basket,BasketDevice,User} = require('../models/models')
const ApiError = require('../error/ApiError');

class BacketController {
    async create(req, res, next) {
        const {id} = req.params
        const Basket = await Basket.create({id})
        return res.json(Basket)
    }

    async createDevice(req, res, next) {
        const {Basketid,Deviceid} = req.params
        const BasketDevice = await BasketDevice.createDevice({Basketid,Deviceid})
        return res.json(BasketDevice)
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }
}

module.exports = new BacketController()