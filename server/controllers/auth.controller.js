import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

export const signup = async (req, res) => {
    try {
        const {
            email, 
            password,
            personalDetails,
            addressDetails,
            voterStatus
        } = req.body;

        // Check if email already exists
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ 
                message: 'Email already registered.' 
            });
        } 

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User ({
            email,
            password: hashedPassword,
            personalDetails,
            addressDetails,
            voterStatus
        });

        await newUser.save();
        
        res.status(201).json({
            message: 'User registered successfully',
            userId: newUser._id
        });

    } catch (error) {
        console.error(error); // Added logging for better debugging
        res.status(500).json({
            message: `Server error while registering: ${error.message}` 
        });
    }
};

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found.' });

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials.' });

        // Generate JWT
        const token = jwt.sign({ userId: user._id, email: user.email }, SECRET, {
            expiresIn: '2h',
        });

        res.json({
            message: 'Login successful.',
            token,
            user: {
                id: user._id,
                email: user.email,
                personalDetails: user.personalDetails,
                role: user.role,
                status: user.status,
            },
        });
    } catch (err) {
        console.error(err); // Added logging for better debugging
        res.status(500).json({ message: 'Server error while logging in.' });
    }
};

export const getProfile = async (req, res) => {
    try {
        const userId = req.user.userId;

        const user = await User.findById(userId).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found.' });

        res.json(user);
    } catch (err) {
        console.error(err); // Added logging for better debugging
        res.status(500).json({ message: 'Server error fetching profile.' });
    }
};
