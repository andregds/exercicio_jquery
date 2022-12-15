$(document).ready(function () {
  $("header button").click(function () {
    //quando clicar no botão 'NOVA IMAGEM'
    $("form").slideDown(); // o menu será expandido
  });

  //Previne o comportamento padrão da pagina quando ele é subimetido (submit)
  $("form").on("submit", function (e) {
    e.preventDefault();

    const enderecoDaNovaImagem = $("#textoTarefa").val(); /* ID do input html */

    const novoItem = $('<li style= "display: none;"></li>');

    $(`<li "${enderecoDaNovaImagem}" />`).appendTo(novoItem);
    $(`
            <div class="listaClass">
                  <a " title= "Lista de tarefas">
                       ${enderecoDaNovaImagem}
                  </a>
   
            </div>
        `).appendTo(novoItem);

    $(novoItem).appendTo("ul");

    $(novoItem).fadeIn(1000);
    $("#textoTarefa").val("");

    $("li").click(function () {
      // Adiciona a classe CSS "marcado" ao item clicado
      $(this).addClass("marcado");
    });
  });
});
