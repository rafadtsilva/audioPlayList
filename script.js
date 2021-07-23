//DA PAUSE NA ANTIGA E EXECUTA MUSICA SELECIONADA
const selectMusic = function () {
  faixa[track].pause();
  faixa[track].currentTime = 0;

  track = this.dataset.n;

  faixa[track].controls = true;
  faixa[track].autoplay=true;
  player.innerHTML = faixa[track].outerHTML;
  
  console.log(musicas)
}

//PEGANDO HTMLS
let player = document.querySelector('.player'); //NÃO TA PRONTO
let musicas = document.getElementsByTagName('audio');
console.log(musicas)

let musicaName = document.getElementsByTagName('p');
const play = document.getElementById('play');
const stop = document.getElementById('stop');

//VARIAVEIS
const lista = ["assets/musics/A Vitoria Chegou.mp3","assets/musics/Cem Ovelhas.mp3", "assets/musics/Diário de um Vencedor.mp3", "assets/musics/Não Pare.mp3", "assets/musics/o maior troféu.mp3", "assets/musics/Eu Vencerei.mp3"] 
let track = 0;
let faixa = [];




lista.forEach((element, item) => {
  //CRIANDO ARRAY COM MUSICAS
  faixa[item] = new Audio(element);

  //QUANDO CLICA NA MUSICA ELE CHAMA A FUNÇÃO QUE EXECUTA A MUSICA CLICADA
  musicaName[item].addEventListener('click', selectMusic);

  //AVANÇO AUTOMTICO DA MÚSICA
  faixa[item].addEventListener('ended', function() {
    track++;
    faixa[track].play();
  })

  //ADD FUNÇÃO CLICK
  play.addEventListener('click', function () {
    faixa[item].play();
  })

  stop.addEventListener('click', function () {
    faixa[item].pause();
  })

});

