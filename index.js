const express = require("express"); //1

const server = express(); //2

//5
//Query params ?nome=NodeJS
//Route params /course/2
//Request Body  {nome: "NodeJS", tipo: "Back-end"}

//4 localhost:3000/curso
// server.get("/curso", (req, res) => {
//   const nome = req.query.nome;

//   return res.json({ curso: `Aprendendo ${nome}` });
// });

//6 localhost:3000/curso/2
server.get("/curso/:id", (req, res) => {
  const id = req.params.id;

  return res.json({ curso: `Curso: ${id}` });
});

server.listen(3000); //3
