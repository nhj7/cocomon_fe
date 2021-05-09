export default function (req, res, next) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log("logger.js", req.url, ip)
    next()
}