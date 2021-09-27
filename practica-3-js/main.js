const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


images.forEach(element => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${element}`);
    thumbBar.appendChild(newImage);
});

thumbBar.addEventListener('click', (e) => {
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
});

btn.addEventListener('click', (e) => {

    if (e.target.className === 'dark') {
        btn.className = 'light';
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.className = 'dark';
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})