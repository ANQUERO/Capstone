import jwt from 'jsonwebtoken';

const getSecret = () => {
    const jwt = process.env.JWT_SECRET;

    if (!jwt) {
        throw new Error('JWT_TOKEN is no defined in the env');
    }
    return jwt;
}

const generateTokenAndSetCookie = (userId, res) => {

    const secret = getSecret();
    const token = jwt.sign(
        { userId },
        secret, {
        expiresIn: "15d",
    });

    const isDevMode = process.env.NODE_ENV === "deployment";

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: 'lax', // Allow cross-site requests in development
		secure: !isDevMode, // Use secure in production only
		path: '/', // Ensure cookie is available for all paths
    })

}

export { 
    generateTokenAndSetCookie,
    getSecret
}