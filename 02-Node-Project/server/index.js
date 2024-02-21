const httpServer = require("http");
const PORT = 4444;

httpServer
  .createServer((req, res) => {
    console.log("Server Is Running On Port" + PORT);
    res.write("Hellow World, We are learning NodeJS");
    res.end();
  })
  .listen(PORT);
