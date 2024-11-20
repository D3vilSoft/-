document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.color-button');

    button.addEventListener('click', function() {
        button.classList.add('gray');
        
        setTimeout(() => {
            button.classList.remove('gray');
        }, 2000); // 2000 миллисекунд = 2 секунды
    });
});
