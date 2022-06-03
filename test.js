const galery = document.querySelector('.galery');
const openImg = document.querySelector('.open-img');
const gambar = galery.querySelectorAll('img');
const ajg = document.querySelector('.ajg');
const gajah = galery.getElementsByTagName('img');


gajah.addEventListener('click', function() {
openImg.style.opacity = 1;
})

ajg.addEventListener('click', function() {
  ajg.style.backgroundColor = 'yellow';
  openImg.style.opacity = 1;
});
