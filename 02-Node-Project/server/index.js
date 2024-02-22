const httpServer = require("http");
const PORT = 4444;
const place = require("./places.json");

httpServer
  .createServer((req, res) => {
    console.log("Server Is Running On Port" + PORT);
    res.write(JSON.stringify(place));
    res.end();
  })
  .listen(PORT);
