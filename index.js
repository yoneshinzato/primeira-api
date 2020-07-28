const express = require("express"); //1

const server = express(); //2

//localhost:3000/curso
server.get("/curso", (req, res) => {
  return res.json({ curso: "Node.js" });
});

server.listen(3000); //3
