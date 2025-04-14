import jwt from 'jsonwebtoken';
import { getSecret } from '../utils/jwt.js';

const authenticateToken = (req, res, next) => {
    const token = req.cookies.jwt 
        || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token missing.' });
    }

    jwt.verify(token, getSecret(), (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token.' });
        }

        req.user = decoded;
        next();
    });
};

export default authenticateToken;
