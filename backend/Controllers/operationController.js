const handlerFactory = require("./handlerFactory");
const Operation = require("./../models/operationModel");

exports.createOperation = handlerFactory.CreateOne(Operation);
