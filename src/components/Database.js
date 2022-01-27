const mongoose = require('mongoose');
const BaseUrl= 'mongodb://localhost/login.usuarios'

mongoose.connect(BaseUrl,{
    useNewUrlParser: true,
    useCreateIndex:true
});

const connection = mongoose.connection;
connection.once('open',() => {
    console.log('DB is connected')
});