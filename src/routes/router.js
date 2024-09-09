import express from 'express'
import http from 'node:http'
import { Controller } from '../controllers/controller.js'

export const router = express.Router()

const controller = new Controller()

router.post('/toPirate', controller.toPirate)

router.post('/fromPirate', controller.fromPirate)

router.get('/', controller.get)