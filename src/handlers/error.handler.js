// // ErrorHandler.js
// const ErrorHandler = (err, req, res, next) => {
//     console.log("Error handler.......");
//     const errStatus = err.statusCode || 500;
//     const errMsg = err.message || 'Something went wrong';
//     res.status(errStatus).json({
//         success: false,
//         status: errStatus,
//         message: errMsg,
//         stack: process.env.NODE_ENV === 'development' ? err.stack : {}
//     })
// }

// export default ErrorHandler

class customError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode || 500;
    }
}
const notFoundHandler = (req, res, next) => {
    return res
        .status(404)
        .json({ success: false, message: "Not found, Check the URL properly !!!" });
};

module.exports = { customError, notFoundHandler };
