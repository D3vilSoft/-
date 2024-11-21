document.getElementById('rotateButton').addEventListener('click', () => {
    const imageContainer = document.getElementById('imageContainer');
    const images = Array.from(document.querySelectorAll('.small-image'));
    let count = 0;

    const swapImages = () => {
        if (count < 6) {
            images.forEach((img, index) => {
                img.classList.add('rotating');
                setTimeout(() => {
                    img.classList.remove('rotating');
                }, 500);
                
                setTimeout(() => {
                    imageContainer.appendChild(images.shift());
                    images.push(img);
                }, 500);
            });
            count++;
        } else {
            clearInterval(swapInterval);
            raiseImage(images[0]);
        }
    };

    const swapInterval = setInterval(swapImages, 700);

    const raiseImage = (image) => {
        image.style.transform = 'translateY(-50px)';
        setTimeout(() => {
            image.querySelector('img').setAttribute('src', 'newimage.jpg'); // Здесь меняем изображение
            image.style.transform = 'translateY(0)';
        }, 500);
    };
});
