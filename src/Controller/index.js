import express from 'express'
import hallController from './hallController.js'


const Controller = express.Router()

Controller.use('/', hallController)


export default Controller