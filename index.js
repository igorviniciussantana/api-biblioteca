var express = require("express");
var app = express();
var { autor } = require("./models");
var { livro } = require("./models")


app.use(express.json());
app.use(express.urlencoded({

  extended: true
}));


app.get("/", async function(req, res) {

res.write('<head><title>Página Inicial</title></head><style type="text/css">body {font-family:sans-serif;text-align:center;}a{text-decoration:none;color:white;background-color:#121212; border-radius:1rem;width:30%;line-height:40px;}a:hover{background-color:#bd1919;transition: 500ms;}.container{display:flex;flex-direction:column;justify-items:center;align-items:center} .nomes{font-weight: bold;font-size:20px;}</style>  <div class="container"> <h1>Página Inicial</h1><a href="https://Trabalho-Final-5.igorsantanasant.repl.co/autores">Autores</a><br><a href="https://Trabalho-Final-5.igorsantanasant.repl.co/livros">Livros</a><p class="nomes">Igor Vinicius de Souza Santana & André Luís Souza Lopes</p>');

});



//autoressss
app.get("/autores", async function(req, res) {

  var retorna = await autor.findAll();
  res.json(retorna)


});




//autoressss
app.post("/autores", async function(req, res) {

  var retorna = await autor.create(req.body);
  res.json(retorna)


});

// Estrutura do post{
//      "nome":"nome",
//      "sobrenome": "sobrenome",
//      "data_nascimento": "9999-99-99"


//     }


//autoressss
app.put("/autores/:id", async function(req, res) {
  var atualizar = await autor.findByPk(req.params.id);

  var resultado = await atualizar.update(req.body);
  res.json(resultado);
});

//autoressss
app.get("/autores/:id", async function(req, res) {
  var resultado = await autor.findByPk(req.params.id);

  res.json(resultado);
});


//autoressss
app.delete("/autores/:id", async function(req, res) {
  var deletar = await autor.findByPk(req.params.id);
   deletar.destroy();
});

app.get("/autores/:id/livros", async function(req, res) {

  var resultado = await autor.findByPk(req.params.id, {include: 'livros'});
  res.json(resultado.livros);

});
//LIVROS DAQUI PARA BAIXOOOO

//livrossssssssssssss
app.get("/livros", async function(req, res) {

  var retorna = await livro.findAll();
  res.json(retorna)

});



//livrossssssssssssss
app.post("/livros", async function(req, res) {

  var retorna = await livro.create(req.body);
  res.json(retorna)

});

app.put("/livros/:id", async function(req, res) {
  var atualizar = await livro.findByPk(req.params.id);

  var resultado = await atualizar.update(req.body);
  res.json(resultado);
});
//livrossssssssssssss
app.get("/livros/:id", async function(req, res) {
  var resultado = await livro.findByPk(req.params.id);

  res.json(resultado);
});

//autoressss
app.delete("/livros/:id", async function(req, res) {
  var deletar = await livro.findByPk(req.params.id);
   deletar.destroy();
});

app.get("/livro/:id/autor", async function(req, res) {

  var resultado = await livro.findByPk(req.params.id, {include: 'autor'});
  res.json(resultado.autor);

});

app.listen(3000, function() {

  console.log("O servidor está funcionando!!!!")

});


// {
//       "titulo":"pequeno principe",
//       "autorId": 3,
//      "editora": "nova",
//      "data_publicacao": "2000-12-01",
//      "preco": 30


//     }