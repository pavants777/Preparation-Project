const express = require('express')
const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const authRoutes = express.Router();

// POST /signup
authRoutes.post('/usersignup', async (req, res) => {
    // Handling signup logic here
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.find({ email });

        if (existingUser.length > 0) {
            return res.status(400).json({ msg: "User with email already exists" });
        }

        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();
        const token = jwt.sign({ id: savedUser._id }, "PasswordKey");
        return res.json({ token, ...savedUser._doc });
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
});



// POST /signup
authRoutes.post('/usersignin',async (req,res)=>{
    // Handleing signin logic here
    try {
        const {email,password } = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({msg : "User with this Email doesn't exits"})
        }

        const isMatch = password === user.password
        if(!isMatch){
            return res.status(400).json({msg : "Invalid Password"});
        }

        const token = jwt.sign({id : user._id},"PasswordKey");
        res.json({token,...user._doc});
    } catch (e) {
        res.status(500).json({msg : e.message})
    }
})

module.exports = authRoutes;