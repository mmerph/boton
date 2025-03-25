const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const sound1 = document.getElementById('sound1');
const sound2 = document.getElementById('sound2');

function playSound(sound) {
    sound.currentTime = 0; // Reinicia el sonido si ya está sonando
    sound.play().catch(error => console.log("Error al reproducir el sonido:", error));
}

function handlePress(player) {
    if (player === 1) {
        button1.classList.add('active-blue');
        playSound(sound1);
    } else {
        button2.classList.add('active-green');
        playSound(sound2);
    }

    // Deshabilitar botones temporalmente
    button1.classList.add('disabled');
    button2.classList.add('disabled');

    setTimeout(() => {
        button1.classList.remove('active-blue', 'disabled');
        button2.classList.remove('active-green', 'disabled');
    }, 2000);
}

// Manejo de eventos táctiles y de clic
button1.addEventListener('touchstart', () => handlePress(1), { passive: true });
button2.addEventListener('touchstart', () => handlePress(2), { passive: true });
button1.addEventListener('click', () => handlePress(1));
button2.addEventListener('click', () => handlePress(2));