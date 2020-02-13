const express  = require('express')
const PostController =  require('./src/controllers/PostController')
const LikeController = require('./src/controllers/LikeController')
const GetController = require('./src/controllers/GetController') //get apenas para não ter erro index
const uploadConfig = require('./src/config/upload')
const multer = require('multer')

const routes  = new express.Router()
const upload = multer( uploadConfig )

routes.get('/posts', PostController.index )
routes.post( '/posts', upload.single('image') , PostController.store )
routes.post('/posts/:id/like', LikeController.store)

routes.get('/', GetController.index )


module.exports =  routes 
