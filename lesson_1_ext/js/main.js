const baseUrl = 'http://localhost:5500/';
const images = ['img/img_1.jpg', 'img/img_22.jpg', 'img/img_3.jpg'];
let localUrls = [];

async function embedImage(url) {
  let res = await fetch(`${baseUrl}${url}`);
  if (res.status === 200) {
    let image = await res.blob();
    let localUrl = URL.createObjectURL(image);
    localUrls.push(localUrl);
  } else {
    console.error(`Ошибка загрузки изображения: ${url}`);
  }
}

async function main() {
  for (let image of images) {
    await embedImage(image);
  }
  for (let item of localUrls) {
    const img = new Image();
    img.src = item;
    document.querySelector('body').appendChild(img);
  }
}

main();
