import * as user from './user.dal'
import {logger}  from '../../../config/winston';
import {env}  from '../../../config/environment';

export const create = function (req, res, next) {
    let body = req.body;
    user.create(body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}

export const getAll = function (req, res, next) {
    logger.info(`[users.controller] getAll`);
    user.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}

export const getRecipient = function (req, res, next) {
    const rut = env.USER_RUT;
    logger.info(`[users.controller] getRecipient rut:${rut}`);
    user.findAllRecipient(rut)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}

export const addRecipient = function (req, res, next) {
    const rut = env.USER_RUT;
    const recipient = req.body;
    logger.info(`[users.controller] addRecipient rut:${rut}`);
    user.addRecipient(rut,recipient)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}

