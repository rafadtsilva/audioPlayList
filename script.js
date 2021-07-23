//DA PAUSE NA ANTIGA E EXECUTA MUSICA SELECIONADA
const selectMusic = function () {
  track = this.dataset.n;
  console.log(faixa[track]);

  // faixa[track].controls = true;
  faixa[track].autoplay = true;
  player.innerHTML = faixa[track].outerHTML;

  musicas[0].addEventListener('ended', proximaMusica);
  musicNumber[0].innerHTML = `Música ${parseInt(track)+1}`;

}

//PEGANDO HTMLS
let player = document.querySelector('.player'); 
let musicas = document.getElementsByTagName('audio');
let musicList = document.getElementsByTagName('li');
let musicNumber = document.getElementsByClassName('music-number');

//VARIAVEIS
const lista = ["assets/musics/A Vitoria Chegou.mp3","assets/musics/Cem Ovelhas.mp3", "assets/musics/Diário de um Vencedor.mp3", "assets/musics/Não Pare.mp3", "assets/musics/o maior troféu.mp3", "assets/musics/Eu Vencerei.mp3"] 
let track = 0;
let faixa = [];

lista.forEach((element, item) => {
  //CRIANDO ARRAY COM MUSICAS
  faixa[item] = new Audio(element);
  faixa[item].controls = true;
  //QUANDO CLICA NA MUSICA ELE CHAMA A FUNÇÃO QUE EXECUTA A MUSICA CLICADA
  musicList[item].addEventListener('click', selectMusic);
  console.log(musicList[item])
});

player.innerHTML = faixa[0].outerHTML;
musicas[0].addEventListener('ended', proximaMusica);
musicNumber[0].innerHTML = `Música ${parseInt(track)+1}`;


function proximaMusica () {
  track++;
  faixa[track].autoplay = true;
  player.innerHTML = faixa[track].outerHTML;
  musicas[0].addEventListener('ended', proximaMusica);
  musicNumber[0].innerHTML = `Música ${parseInt(track)+1}`;
}