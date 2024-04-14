const express = require('express');
const router = express.Router();
const signUpSchema = require('../models/signUp');

router.post('/signup', (request, response) => {
    const user = new signUpSchema({
        uid : request.body.uid,
        password : request.body.password 
    });

    user.save()
    .then(data => {
        response.json("User signed up successfully");
    })
    .catch(error => {
        response.json(error);
    });

}); 



const User = require('../models/signUp');

router.post('/login', async (request, response) => {
    try {
        const { uid, password } = request.body;

        // Find user by username
        const user = await User.findOne({ uid });

        if (!user) {
            return response.status(401).json({ error: 'Incorrect username or password' });
        }

        // Check if the password is correct
        if (user.password !== password) {
            return response.status(401).json({ error: 'Incorrect password' });
        }

        // If user and password are correct, send the UID
        response.json({ uid: user.uid });
    } catch (error) {
        response.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router; // Ensure that router is exported
