//geta todos os elementos com a classe "duvida"
const botaoDuvidas = document.querySelectorAll(".duvida");

//percorre todos os elementos getados
//aplica as funções a todos os elementos getados
botaoDuvidas.forEach(function (duvida) {
    //escuta quando o usuário clicar no elemento
    duvida.addEventListener("click", function () {
        //liga e desliga a classe que foi determinada
        //para ocultar ou mostrar o conteúdo da resposta
        duvida.classList.toggle("atual");
    });
});