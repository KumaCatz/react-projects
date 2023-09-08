const http = require('http');

const axios = require('axios');

axios.get('http://localhost:2000/home')
    .then(resp => {
        console.log(resp.data);
    })

/*
    1) init package 
    2) install axios
    3) use action to fecth api/todos
    4) console log first item 
*/