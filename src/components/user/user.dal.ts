import User from './user.model';
import {logger}  from '../../../config/winston';

export const create = (data) => {
    return new Promise((resolve, reject) => {
        const user = new User(data);
        user.save()
        .then(dat => {            
            resolve(dat);
        })
        .catch(err => {
           reject(err);
        });
    })
}

export const findAll = () => {
    return new Promise((resolve, reject) => {
        User.find()
        .then(user => {            
            resolve(user);
        })
        .catch(err => {
           reject(err);
        });
    })
}

export const findAllRecipient = (rut) => {
    return new Promise((resolve, reject) => {
        User.findOne({ rut : rut })
        .then(user => {            
            resolve(user['recipient']);
        })
        .catch(err => {

           reject(err);
        });
    })
}

export const addRecipient = (rut, recipient) => {
    return new Promise((resolve, reject) => {
        User.findOneAndUpdate(
            { rut : rut }, 
            { $push: { recipient: recipient  } }
        )
        .then(dat => {            
            resolve(dat);
        })
        .catch(err => {
           logger.error(`[users.dal] addRecipient error:${err}`);
           reject(err);
        });
    })
}