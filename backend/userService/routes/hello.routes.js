const express = require('express')
const routes = express.Router()

const helloControler = require("../controller/hello.controller")

routes.get('./hello', helloController.hello)