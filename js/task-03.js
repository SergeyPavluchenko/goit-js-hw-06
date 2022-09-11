const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//  1 варінт
// const ImgReh = document.querySelector('.gallery');
// // console.log(ImgReh);
// ImgReh.style.positionAbsolute;
// const ImgAddContent = images.map(gallery => 
//   `<li><img src="${gallery.url}" alt="${gallery.alt}"  width = '100%' height = '100%';></li>;`
// ).join('');
// ImgReh.insertAdjacentHTML('afterbegin', ImgAddContent);
// console.log(ImgAddContent);

// 2 варінт

const imgReh = document.querySelector('.gallery');
// console.log(imgReh);

const imgAddContent = images.map(({ url, alt }) => {
  return `<li><img class="galary-item" src="${url}" alt="${alt}"  width = '100%' height = '100%';></li>`
});
let markup = imgAddContent.join('');
imgReh.insertAdjacentHTML('afterbegin', markup);
