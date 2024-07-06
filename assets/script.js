$(document).ready(function () {
  $(".mudaTela").click(function () {
    mudaTela(
      $(this),
      $(this).attr("nova"),
      $(this).attr("animacao"),
      $(this).attr("tempoAnimacao")
    );
  });

  $("a.opcoes").click(function (e) {
    e.preventDefault();
    $("div.opcoes").slideToggle(500);
  });

  $(".calendario .marcado").click(function () {
    mostraMsgMes($(this).attr("value"));
  });

  const mudaTela = (
    atual,
    nova = null,
    animacao = "fade",
    tempoAnimacao = 900
  ) => {
    // define a nova tela
    if (!nova) {
      nova = parseInt(atual.parent().attr("id").split("tela")[1]) + 1;
    }

    if (animacao == "fade") {
      $("#tela" + (nova - 1)).fadeOut(tempoAnimacao);
      setTimeout(() => {
        $("#tela" + nova).fadeIn(tempoAnimacao);
      }, tempoAnimacao);
    } else {
      $("#tela" + (nova - 1)).hide(tempoAnimacao);
      $("#tela" + nova).show(tempoAnimacao);
    }

    if ($("#tela" + nova).hasClass("temporizado")) {
      $("#tela" + nova + " div").hide();
      telaTemporizada(nova, 0);
    }

    verificaFundo(nova);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    if (nova == 5) {
      var audio = new Audio("assets/musica.mp3");
      audio.loop = true;
      audio.volume = 0.7;
      audio.play();
    }

    if (nova == 20) {
      // bloqueia clique na pagina (exceto no pop-up)
      $("body").click(function (e) {
        if (!$(e.target).hasClass("pop-up")) {
          e.preventDefault();
          e.stopPropagation();
        }
      });

      setTimeout(() => {
        mostraMsgMes("final");
      }, tempoAnimacao * 3);
    }
  };

  const telaTemporizada = (nTela, contador) => {
    const tela = $("#tela" + nTela + " div:eq(" + contador + ")");
    const temporizador = 500;
    const temporizadorPrimeiraTela =
      contador == 0 ? $("#tela" + nTela).attr("tempo") : temporizador;

    setTimeout(() => {
      tela.fadeIn(temporizador);

      setTimeout(() => {
        tela.fadeOut(temporizador);
        if (tela.attr("final") == "true") {
          mudaTela(null, nTela + 1, "fade", 900);
          verificaFundo(nTela + 1);
        } else {
          telaTemporizada(nTela, contador + 1);
        }
      }, tela.attr("tempo"));
    }, temporizadorPrimeiraTela);
  };

  const verificaFundo = (nTela) => {
    const fundo = $("#tela" + nTela).attr("fundo");
    const tempo = $("#tela" + nTela).attr("tempo");

    if (fundo) {
      $("body").attr("class", fundo);
    }
  };

  const mostraMsgMes = (texto) => {
    let titulo;
    let mensagem;

    switch (texto) {
      case "24/5":
        titulo = "24 de Maio de 2024";
        mensagem =
          "<p>Esse foi o dia que nos conhecemos. Foi bem rápido e conversamos tão pouquinho, mas já foi o suficiente para querer te conhecer cada vez mais.</p><p>Eu tinha muito receio, na verdade, eu não sabia se iríamos conversar novamente.</p>A propósito, você tem sido incrível desde este dia, quando eu ainda não sabia se teu nome verdadeiro era Jayne ou Juliana kkkk. Essa é uma longa e engraçada história que vamos rir bastante ao contar a alguém.</p>";
        break;
      case "26/5":
        titulo = "26 de Maio de 2024";
        mensagem =
          "<p>Foi o dia em que tomei atitude e te chamei novamente no WhatsApp para conversarmos.<p>Você estava estudando nesse dia, preparando uma apresentação para o próximo dia. Lembro que estava um pouco tensa e ansiosa. Ficamos conversando quase a madrugada inteira.</p><Mas>No começo, foi engraçado porque eu não fazia ideia do que falar kkkkkk. Mas aí eu tirei a carta suprema da manga: enviei uma foto do meu gato. E funcionou!</p>";
        break;
      case "4/6":
        titulo = "4 de Junho de 2024";
        mensagem =
          "<p>Esse é um dos dias mais especiais para mim. Foi o dia em que marcamos nosso primeiro encontro. Você convidou-me a te acompanhar numa apresentação de Ballet e eu, sabendo que é algo que você ama, me senti muito feliz em poder te acompanhar.</p><p>Foi um dia incrível, cheio de risadas, conversas e muita cumplicidade.</p><p> Foi o dia em que percebi que você era muito mais do que eu imaginava.</p><p>Ah, não posso deixar de falar, você estava um espetáculo de LINDA neste dia.</p>";
        break;
      case "5/6":
        titulo = "5 de Junho de 2024";
        mensagem =
          "<p>Dessa vez, o convite foi meu. Marcamos de nos encontrar na orla de Cabo Branco, sob o luar claro e a brisa suave do mar. Foi onde, além de nos conhecermos melhor, demos o nosso primeiro beijo.</p><p>Uma noite inesquecível! Eu já sabia que queria você!</p>";
        break;
      case "11/6":
        titulo = "11 de Junho de 2024";
        mensagem =
          "<p>Nos encontramos novamente na orla de Cabo Branco, era o nosso ponto de calmaria. Mas antes, demos uma passada rápida no Açaí Empório.</p><p>Depois, sentamos na areia da praia e ficamos curtindo a presença um do outro. Conversamos sobre várias coisas, nossos desejos e planos. </p>";
        break;
      case "17/6":
        titulo = "17 de Junho de 2024";
        mensagem =
          "<p>Neste dia, tomamos um sorvete aqui pertinho e depois ficamos conversando por horas e horas.</p><p>Também não posso deixar de falar do presente que você me deu, um quadro pintado por você mesma. Esse quadro tem muito valor para mim, obrigado!</p>";
        break;
      case "21/6":
        titulo = "21 de Junho de 2024";
        mensagem =
          "<p>Mais uma vez nos encontramos em meu apartamento. Você não quis sair para nenhum lugar. Segundo você, o lugar não importava, e sim minha presença. Dessa vez, você estava menos tímida e curtimos mais, tomamos um sorvete e ficamos deitados ouvindo suas músicas favoritas de MPB.</p><p>...e como sempre, a hora em que você tinha que voltar para casa era sempre difícil.</p>";
        break;
      case "25/6":
        titulo = "25 de Junho de 2024";
        mensagem =
          "<p>Mais um dia em que tivemos juntinhos, matando a saudade e recarregando nossas energias após um dia cansativo.</p><p>Te agradeço por todo momento como este!</p>";
        break;
      case "1/7":
        titulo = "1 de Julho de 2024";
        mensagem =
          "<p></p>Iniciamos a semana se vendo novamente. Você veio me visitar e, como sempre, foi maravilhoso compartilhar uma parte do meu dia com você.</p>";
        break;
      case "3/7":
        titulo = "3 de Julho de 2024";
        mensagem =
          "<p>Contra todas as expectativas, conseguimos nos ver novamente na mesma semana. Embora tínhamos conversado que seria uma semana mais puxada para ambos, você conseguiu me encaixar num tempinho livre que teve.</p>";
        break;
      case "5/7":
        titulo = "5 de Julho de 2024";
        mensagem =
          "<p>Foi um dia um pouco atípico. Tivemos um desentendimento, mas logo ficamos tranquilos. Você ficou com dor de cabeça, estava cansada também devido a um dia cheio.</p><p>Mesmo assim, por volta das 18:30 você perguntou se poderia passar no meu apartamento para me ver. O seu esforço me conquista sempre!</p>";
        break;
      case "7/7":
        titulo = "7 de Julho de 2024";
        mensagem =
          "<section class='text-center'><p class='letra-vermelha'><strong>Este momento está sendo escrito agora...</strong></p></section>";
        break;
      case "final":
        titulo = "7 de Julho de 2024";
        mensagem =
          "<section class='text-center mt-5 mb-5'><p><strong>O dia em que ela disse<br><span class='letra2 letra-vermelha'>SIM</span></strong></p></section>";
        break;
    }

    mostraPopUp(true, titulo, mensagem);
    telaFinal = texto == "final" ? true : false;
  };
});

let telaFinal = false;

const mostraPopUp = (
  mostrar,
  titulo = "Título de testes",
  mensagem = "Mensagem de teste..."
) => {
  if (mostrar) {
    $("html, body").animate({ scrollTop: $(".pop-up")[0].offsetTop }, "smooth");
    $(".pop-up").fadeIn(500);
    $(".pop-up h1").html(titulo);
    $(".pop-up div").html(mensagem);
    $(".container").css("opacity", "0.5");
  } else {
    $(".pop-up").fadeOut(500);
    $(".container").css("opacity", "1");

    if (telaFinal) {
      $("#tela20").fadeOut(4000);
      setTimeout(() => {
        $("#tela21").fadeIn(6500);
        $("body").attr("class", "fundo6");
        $("html, body").animate({ scrollTop: 0 }, "slow");
      }, 4000);
    }
  }
};
