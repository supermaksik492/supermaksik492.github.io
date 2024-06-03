let selectedFood = '';

function showInfo(animal) {
    let info = document.getElementById('info');
    let text = '';

    switch (animal) {
        case 'lion':
            text = 'El león es conocido como el rey de la selva. Es un animal majestuoso con una melena impresionante.';
            break;
        case 'elephant':
            text = 'El elefante es el animal terrestre más grande. Tiene una trompa larga que usa para muchas cosas, incluyendo beber y alimentarse.';
            break;
        case 'giraffe':
            text = 'La jirafa es el animal terrestre más alto. Su cuello largo le permite alcanzar las hojas en lo alto de los árboles.';
            break;
        default:
            text = 'Selecciona un animal para aprender más sobre él.';
    }

    info.textContent = text;
}

function selectFood(food) {
    selectedFood = food;
    document.getElementById('info').textContent = `Has seleccionado: ${food}`;
}

function feedAnimal(animal) {
    let feedback = document.getElementById('feedback');
    let success = false;

    switch (animal) {
        case 'lion':
            success = selectedFood === 'meat';
            break;
        case 'elephant':
            success = selectedFood === 'fruits';
            break;
        case 'giraffe':
            success = selectedFood === 'leaves';
            break;
        default:
            success = false;
    }

    if (success) {
        feedback.textContent = `¡Correcto! Has alimentado al ${animal} correctamente.`;
        feedback.style.color = 'green';
    } else {
        feedback.textContent = `¡Incorrecto! El ${animal} no come ${selectedFood}.`;
        feedback.style.color = 'red';
    }
}