'use strict'

const authMiddleware = require('./middlewares/auth')
const roleMiddleware = require('./middlewares/role')

module.exports = function (app, opts) {
  const router = require('express').Router()

  router.get('/pur', (req, res) => res.json({ success: true, message: 'API is running smooth MasPur!' }))

  app.use('/api/v1', router)
}
