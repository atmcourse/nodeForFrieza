const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('GET handle for /news route.')
  res.json({})
})

router.post('/', function (req, res) {
  res.send('POST handle for /news route')
  res.json({})
})

module.exports = router