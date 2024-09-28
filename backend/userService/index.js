const express = require('express');
require('dotenv').config();

const app = express();



const users = [
    {
        name: "ruchi",
        email: "abc@gmail.com",
        id: 1
    },
    {
        name: "mayank",
        email: "abc@gmail.com",
        id: 2
    },
    {
        name: "abcd",
        email: "abc@gmail.com",
        id: 3
    }
]

app.get('/', function (req, res) {
    try {
        res.send('Hello World')
    } catch (err) {
        console.log("something went wrong");
    }
})

app.get("/allUser", function (req, res) {
    try {
        res.send(users);
    } catch (err) {
        console.log("something went wrong");
    }
})

app.get("/allUser/:name", function (req, res) {
    try {
        let name = req.params.name;
        let user = users.find(u => u.name === name); 
        if (user) {
            res.send(user); 
        } else {
            res.status(404).send({ message: "User not found" }); 
        }
    } catch (err) {
        console.log("something went wrong");
        res.status(500).send({ message: "Internal server error" });
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server starting at port ${process.env.PORT}`);
});
