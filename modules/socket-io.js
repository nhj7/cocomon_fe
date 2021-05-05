export default function () {
    console.log("modules.socket-io.js");
    // npm run dev 용 socket-io 등록.
    this.nuxt.hook('listen', server => {
      console.log("nuxt hook listen!!!", server);
      require("../middleware-server/socket-io")(server);
    })
  }