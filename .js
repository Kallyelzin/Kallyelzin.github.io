// Botão para mudar a mensagem
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = 'Você clicou no botão e encheu meu coração de alegria! 💕';
    message.classList.add('highlight');
});

// Botão para resetar a mensagem
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    const message = document.getElementById('message');
    message.innerHTML = `
        <p>
            Hoje é um dia muito especial, porque é o dia da pessoa mais incrível que eu conheço: você. <br>
            Obrigado por todo o amor, carinho e apoio. Que seu dia seja lindo como você! ❤️
        </p>`;
    message.classList.remove('highlight');
});

// Função de confete
function startConfetti() {
    const colors = ['#f50057', '#f48fb1', '#ff80ab', '#e91e63', '#ff4081'];
    const interval = setInterval(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }, 300);

    // Parar os confetes após 20 segundos
    setTimeout(() => clearInterval(interval), 20000);
}
