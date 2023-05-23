// module.exports = (req, res, next) => {
//   const error = new Error("Not found");
//   error.message = "Invalid route";
//   error.status = 404;
//   next(error);
// };

export default {
  notFound(req, res, next) {
    const error = new Error("Not found");
    error.message = "Invalid route";
    error.status = 404;
    next(error);
  },
};
