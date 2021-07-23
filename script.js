//DA PAUSE NA ANTIGA E EXECUTA MUSICA SELECIONADA
const selectMusic = function () {
  musicas[track].controls = false;
  musicas[track].pause();
  musicas[track].currentTime = 0;

  console.log(musicas[track]);

  track = this.dataset.n;
  // console.log(faixa[track]);

  // faixa[track].controls = true;
  musicas[track].controls = true;
  musicas[track].play();

  musicNumber[0].innerHTML = `Música ${parseInt(track)+1}`;
}

//PEGANDO HTMLS
let player = document.querySelector('.player'); 
let musicas = player.getElementsByTagName('audio');
let musicInit = musicas[0].outerHTML;
let musicList = document.getElementsByTagName('li');
let musicNumber = document.getElementsByClassName('music-number');


player.innerHTML = ""; //apaga o player após pegar a variavél audio

//VARIAVEIS
const lista = ["assets/musics/A Vitoria Chegou.mp3","assets/musics/Cem Ovelhas.mp3", "assets/musics/Diário de um Vencedor.mp3", "assets/musics/Não Pare.mp3", "assets/musics/o maior troféu.mp3", "assets/musics/Eu Vencerei.mp3"] 
let track = 0;
let faixa = [];

//CRIANDO TAG AUDIO DAS MUSICAS
lista.forEach((element, item) => {
  //CRIANDO ARRAY COM MUSICAS
  player.innerHTML += musicInit; //a div player recebe a tag audio configurada em forma de string
  player.getElementsByTagName('audio')[item].src = element; //adiciona o endereço da música
  

  //QUANDO CLICA NA MUSICA ELE CHAMA A FUNÇÃO QUE EXECUTA A MUSICA CLICADA
  musicList[item].addEventListener('click', selectMusic);
  console.log(musicList[item])

  musicas[item].addEventListener('ended', proximaMusica);

});

console.log(musicas);
console.log(player);

musicas[0].controls = true;

// player.innerHTML = faixa[0].outerHTML;
musicas[0].addEventListener('ended', proximaMusica);
musicNumber[0].innerHTML = `Música ${parseInt(track)+1}`;


function proximaMusica () {

  musicas[track].controls = false;
  musicas[track].pause();
  musicas[track].currentTime = 0;

  track++;

  musicas[track].controls = true;
  musicas[track].play();

  musicNumber[0].innerHTML = `Música ${parseInt(track)+1}`;
}