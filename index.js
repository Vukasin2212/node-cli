const http = require("http");
//const chalk = require("chalk");
//const clear = require("clear");
const figlet = require("figlet");

//numbers for formatting
const rez = "123456789";

//formatting numbers
const showRez = figlet.textSync(rez, { horizontalLayout: "full" });
console.log(rez);

//showed formatted numbers in browser
let app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(showRez);
});

app.listen(4000, "127.0.0.1");
console.log("Node server running on port 4000");
