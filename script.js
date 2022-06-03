function getPilihanComputer() {
  // var bot = Math.round(Math.random() * 11 + 1);
  // if (bot >= 1 && bot <= 3) return "gajah";
  // if (bot >= 4 && bot <= 7) return "semut";
  // return "orang";

  var bot = Math.round(Math.random() * 11 + 1);
  if (bot >= 1 && bot <= 3) {
    return "gajah";
  }else if (bot >= 4 && bot <= 7) {
   return "semut";
  }else {
    return "orang";
  }
}

function getHasil(bot, human) {
  if (human == bot) {
    return'seri';
  }else if (human == "gajah") {
    if (bot == "semut") {
      return 'kalah';
    }else {
      return 'menang';
    }
  }else if (human == "semut") {
    if (bot == "gajah") {
      return 'menang';
    }else {
      return 'kalah';
    }
  }else if (human == "orang") {
    if (bot == "gajah") {
      return 'kalah';
    }else {
    return 'menang';
    }
}}
//-------------------------------CARA LAMA-------------------------------------
// const pGajah = document.querySelector('.gajah');
// const pSemut = document.querySelector('.semut');
// const pOrang = document.querySelector('.orang');
//
// pGajah.addEventListener('click', function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const pHasil = document.querySelector('.panel-tengah');
//   const imgbot = document.querySelector('.bot');
//
//
//   console.log('Comp : \n ' + pilihanComputer);
//   console.log('Player : \n ' + pilihanPlayer);
//   console.log('Hasil : \n' + hasil);
//   pHasil.innerHTML = hasil;
//   imgbot.setAttribute('src', pilihanComputer + '.png');
// });
//
// pSemut.addEventListener('click', function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const pHasil = document.querySelector('.panel-tengah');
//   const imgbot = document.querySelector('.bot');
//
//
//
//   console.log('Comp : \n ' + pilihanComputer);
//   console.log('Player : \n ' + pilihanPlayer);
//   console.log('Hasil : \n' + hasil);
//   pHasil.innerHTML = hasil;
//   imgbot.setAttribute('src', pilihanComputer + '.png');
// });
//
// pOrang.addEventListener('click', function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const pHasil = document.querySelector('.panel-tengah');
//   const imgbot = document.querySelector('.bot');
//
//
//
//   console.log('Comp : \n ' + pilihanComputer);
//   console.log('Player : \n ' + pilihanPlayer);
//   console.log('Hasil : \n' + hasil);
//   pHasil.innerHTML = hasil;
//   imgbot.setAttribute('src', pilihanComputer + '.png');
// });

// -------------------------------CARA BARU-------------------------------------
const pilihan = document.querySelectorAll('li img');
pilihan.forEach((pil, i) => {
  console.log(pil);

  pil.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    const pHasil = document.querySelector('.panel-tengah');
    const imgbot = document.querySelector('.bot');



    console.log('Comp : \n ' + pilihanComputer);
    console.log('Player : \n ' + pilihanPlayer);
    console.log('Hasil : \n' + hasil);
    pHasil.innerHTML = hasil;
    imgbot.setAttribute('src', pilihanComputer + '.png');
  });

});



// ---------------------nyoba pake for--------------------
// const pilihan = document.querySelectorAll('li img');
// for (var i = 0; i < pilihan.length; i++) {
//   console.log(pilihan[i]);
// }
