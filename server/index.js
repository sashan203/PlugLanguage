require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT||3000

const app = express()
<<<<<<< HEAD
app.use(cors())//для отправки запросов из браузера
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))//путь к изображениям товаров
=======
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
>>>>>>> a03f181a7160cc7217bc409277f6b26cd6c2cfdc
app.use(fileUpload({}))
app.use('/api',router)


<<<<<<< HEAD
// обработка ошибок, далее отправляется ответ на клиент, так что должен быть всегда в конце
=======
>>>>>>> a03f181a7160cc7217bc409277f6b26cd6c2cfdc
app.use(errorHandler)

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>{
            console.log('Server worked')
    })
    }catch(e){
        console.log(e)
    }
}
start()