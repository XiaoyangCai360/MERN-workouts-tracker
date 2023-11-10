require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // app listen for requests on port 4000
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })

// middleware
app.use(express.json());
app.use(morgan('dev'));
// app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next();
// })

// workout routes
app.use('/api/workouts', workoutRoutes);

