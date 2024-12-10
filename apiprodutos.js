const produtos = [
    { 
        id: 1,
        nome:"Celular",
        quantidade:8,
        preco:12.800,00
    },
    {
        id: 2,
        nome:"Nootebook",
        quantidade:4,
        preco:14.658,00
    }
    {
        id: 3,
        nome:"Impressora",
        quantidade:6,
        preco:7.476,60
    }
];


function listaProduto(){
        return produtos;
}

function listaProduto(id){
    return produtos.find(c => c.id == id);
}

function insereProduto(produto){
    produto.push(produto);
}

function alteraProduto(id,dadosproduto){
    const produtonovo =  produtos.find(c => c.id == id);
   if (produtonovo){
    produtonovo.nome =  dadosproduto.nome;
    produtonovo.quantidade = dadosproduto.quantidade;
    produtonovo.preco = dadosproduto.preco;
   } else {
        return("Tente novamente!");
   }    
}

function removeProdutos(id){
    const indice = produtos.findIndex(c => c.id == id);
    produtos.splice(indice,1);
}


module.exports = {
    listaProduto,
    listaProduto,
    insereProduto,
    alteraProduto,
    removeProduto
}

