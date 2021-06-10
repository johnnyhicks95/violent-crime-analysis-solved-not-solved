import mongoose from 'mongoose';

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/acvrnr', {
    useNewUrlParser: true,
    useUnifiedTopology: true // actualizacion de la version >= 3.1.0 de agosto 2019
} )


export { }