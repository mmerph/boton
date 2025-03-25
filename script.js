const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const sound1 = document.getElementById('sound1');
const sound2 = document.getElementById('sound2');

function handlePress(player) {
    if (player === 1) {
        button1.classList.add('active-blue');
        sound1.play();
    } else {
        button2.classList.add('active-green');
        sound2.play();
    }

    // Deshabilitar ambos botones para mostrar quién ganó
    button1.classList.add('disabled');
    button2.classList.add('disabled');

    setTimeout(() => {
        button1.classList.remove('active-blue', 'disabled');
        button2.classList.remove('active-green', 'disabled');
    }, 2000); // Reactivar después de 2 segundos
}

// Eventos para tocar en móvil
button1.addEventListener('touchstart', () => handlePress(1), { passive: true });
button2.addEventListener('touchstart', () => handlePress(2), { passive: true });