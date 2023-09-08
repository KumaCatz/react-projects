const fs = require('fs');
const express = require('express');
const cors = require('cors');
const DB = require('./src/nodejsTeacher/db');
const { ERR, NOT_FOUND, ERR_NOT_ALLOWED, ERR_MISSING_PARAMS } = require('./src/nodejsTeacher/utils/errors');

const app = express();
const users = new DB('users');
/*
    DRY

    Dont Repeat Yourself
*/


//middleware
app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use((req, res, next) => {
    console.log('We are on a middleware');
    next();
})


//routes

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const middleware = (req, res, next) => {
    const { age, name, email } = req.body;

    if (!age || !name || !email) {
        return next(ERR_MISSING_PARAMS);
    }

    if (isNaN(age)) {
        return next([400, 'age must be a number']);
    }

    if (!validateEmail(email)) {
        return next([400, `${email} is not a valid email`]);
    }

    req.body.age = +age;

    next();
}

const controller = (req, res, next) => {
    console.log('controller')
    if (req.body.name === 'yy') {
        return next(ERR_NOT_FOUND);
    }
    const newId = users.add(req.body);
    res.send({ id: newId });
}

app.post('/users', middleware, controller);

app.get('/users', (req, res, next) => {
    try {
        const data = users.getData();
        res.send(data);
    } catch (error) {
        next(ERR);
    }
})



app.get('/users/:userId', (req, res, next) => {
    if (blabla === 'yy') {
        return next(ERR);
    }

    const { userId } = req.params;
    const user = users.getById(userId);
    res.send(user);

})

app.put('/users/:userId', (req, res) => {
    const { userId } = req.params;
    users.updateById(userId, req.body);
    res.send('updated');
})

app.delete('/users/:userId', (req, res) => {
    const { userId } = req.params;
    users.deleteById(userId);
    res.send('deleted');

})



app.post('/db/:name', (req, res) => {
    const { name } = req.params;
    const obj = Object.keys(req.body).length ? req.body : [];

    fs.writeFileSync(`db/${name}.json`, JSON.stringify(obj, null, 2));

    res.send('ok');

})

app.get('/db/:name', (req, res) => {
    const { name } = req.params;

    const content = fs.readFileSync(`db/${name}.json`, 'utf-8');
    console.log(content);

    res.send(JSON.parse(content));
})




//error handling 
app.use((err, req, res, next) => {
    console.log(err);

    try {
        const [statusCode, msg] = err;

        res.status(statusCode).send({
            error: true,
            message: msg
        })
    } catch (error) {
        res.status(500).send({
            error: true,
            message: err.message
        })
    }
})

app.listen(2500, () => {
    console.log('express is listening on port: 2500');
})

