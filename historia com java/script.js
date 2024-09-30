const sky = document.querySelector('.sky');

function createStars() {
    for (let i = 0; i < 100; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        
        // Define posições aleatórias para as estrelas
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDuration = Math.random() * 2 + 1 + 's'; // Tempo de animação variável
        star.style.animationDelay = Math.random() * 5 + 's'; // Atraso para cada estrela

        sky.appendChild(star);
    }
}

createStars();
