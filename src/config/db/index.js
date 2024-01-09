const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/db_dev')
        .then(
            () => console.log('Connect DB success')
        );
    }
    catch(e){
        console.log('Connect Error');
    }
}

module.exports = {
    connect
};