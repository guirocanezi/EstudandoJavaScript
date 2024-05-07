function mensagem()
{
    alert("BOM DIA!!!");
}

function alertaCorDeFundo()
{
    document.body.style.backgroundColor = "#FF0000";
    let h1 = document.querySelector("h1");
    h1.style.color = "#FFF";

    let texto = document.querySelector("p");
    texto.style.fontSize = "60px";
    texto.style.color = "#FFFF00";

    let info = document.querySelector(".info");
    info.style.color = "#000FFF";
}    

function ResetarCor()
{
    document.body.style.backgroundColor = "#FFF";
}

function alterarBox()
{
    let caixa = document.querySelector(".box");
    if (caixa.classList.contains("box-escuro"))
    {
        caixa.classList.remove("box-escuro");
    }
    
    else
    {
        caixa.classList.add("box-escuro");      
    }
    
}

function showHide()
{
    let sessao = document.querySelector(".visibilidade");
    if (sessao.classList.contains("invisivel"))
    {
        sessao.classList.remove("invisivel");
    }

    else
    {
        sessao.classList.add("invisivel");
    }
}

function conversar(){
    let chat = document.querySelector(".chat");

    if(chat.classList.contains("ativo")) {
        chat.classList.remove("ativo");
    }
    else{
        chat.classList.add("ativo");
    }
}