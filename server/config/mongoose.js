const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mongoose-es6-rest-api:index');
const config = require('../config/config');

const mongoUri = config.mongo.uri;


mongoose.connect(mongoUri, {keepAlive: 1, useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', ()=>{
    console.log(`connected to the database: ${mongoUri} `);
});

db.on('error', () =>{
    throw new Error(`unable to connect to database: ${mongoUri}`);

});

if(config.mongo.isDebug){
    mongoose.set('debug', (CollectionName, method, query, doc)=> {
        debug(`${CollectionName}.${method}`, util.inspect(query, false, 20), doc);

    });
}

module.exports = db;
