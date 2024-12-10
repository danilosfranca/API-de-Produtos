require("dotenv").config();

const db = require("./db");

const express = require("express")  ;

const app = express();


app.use(express.json());

app.delete("/produto/:id",(request, response)=>{
    const id = request.params.id;
    db.removeProduto(id);
    response.sendStatus(204);
});

app.patch("/produto/:id",(request, response)=>{
    const id = request.params.id;
    const dadosproduto = request.body;
    db.alteraCliente(id, dadosproduto);
    response.sendStatus(200);
});

app.post("/produtos", (request, response)=>{
    const produto = request.body;
    db.insereProduto(produto);
    response.sendStatus(201);
});

app.get("/produto/:id",(request, response)=>{
    const id = request.params.id;
    response.json(db.listaProduto(id));
});

app.get("/produtos",(request, response)=>{
    response.json(db.listaProduto());
});


 app.get("/", (request, response) => {
         response.json({
             message: "Tudo certo pode continuar!"
         })
     })


app.listen(process.env.PORT, ()=>{
    console.log("Aplicativo em processamento") ;   
})

