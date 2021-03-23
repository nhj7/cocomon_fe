export default function (req, res, next) {
    console.log("logger.js", req.url)
    next()
}