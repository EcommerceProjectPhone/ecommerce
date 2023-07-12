const isAuthenticate = (req, res, next) => {
  // Check user role and implement your authentication logic here
  const { role } = req.user;

  // Example logic to check user role
  if (role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }

  // User is authenticated, proceed to the next middleware or route handler
  next();
};

module.exports = isAuthenticate;
