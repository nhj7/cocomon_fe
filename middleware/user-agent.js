export default function (context) {
    // Add the userAgent property to the context
    // context.userAgent = process.server
    //   ? context.req.headers['user-agent']
    //   : navigator.userAgent

    console.log("middleware");
  }