const User = require('../models/user.model').User;

const registerUser = async (req, res) => {
    try {
        console.log('User Details: ', req.body);

      
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).send('Username already exists');
        }

        let userData = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        await userData.save();
        res.send('User registered!!!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
};
const getUser = async (req, res) => {
    try{
        User.find({})
            .then(data => res.send(data))
            .catch(err => res.send('something went wrong'))
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
};

module.exports = { registerUser, getUser };
