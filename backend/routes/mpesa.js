const express = require("express");
const router = express.Router();

const { token, stkPush } = require("../controller/mpesaController");

router.post("/stk/push", token, stkPush);

module.exports = router;
