// const button1 = document.getElementById("button1");

// let audio1 = new Audio();
// audio1.src = "assets/musics/A Vitoria Chegou.mp3";
// let audio2 = new Audio();
// audio2.src = "assets/musics/Eu Vencerei.mp3";
// console.log(audio1)

// button1.addEventListener('click', function() {
//   audio1.play();
//   audio1.addEventListener('playing', function() {
//     console.log('Audio 1 started playing!');
//   });
//   audio1.addEventListener('ended', function() {
//     console.log('Audio 1 ended!');
//   })
// })

let player = document.querySelector('.player');
let musica = document.getElementsByTagName('p');
const lista = ["assets/musics/A Vitoria Chegou.mp3","assets/musics/Cem Ovelhas.mp3", "assets/musics/Diário de um Vencedor.mp3", "assets/musics/Não Pare.mp3", "assets/musics/o maior troféu.mp3", "assets/musics/Eu Vencerei.mp3"] 
console.log(player);
let track = 0;

player.src = lista[track];

const selectMusic = function () {
  console.log(lista[this.dataset.n])
  player.src = lista[this.dataset.n];
  player.play();
  track = this.dataset.n;
}

player.addEventListener('ended', function() {
  track++;
  player.src = lista[track];
  player.play();
})

musica[0].addEventListener('click', selectMusic);
musica[1].addEventListener('click', selectMusic);
musica[2].addEventListener('click', selectMusic);
musica[3].addEventListener('click', selectMusic);
musica[4].addEventListener('click', selectMusic);
musica[5].addEventListener('click', selectMusic);

