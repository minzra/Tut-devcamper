//@desc     Logs request to console
const logger = (req, res, next) => {
  // set a value on this request object and we can then access from
  // any route after this middleware
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  next(); // You need to call this so it knows to move onto the next piece of middleware cycle
};

module.exports = logger;
