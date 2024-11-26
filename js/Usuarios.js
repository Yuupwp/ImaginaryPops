
function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

window.addEventListener('click', function (event) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (!event.target.closest('.user-dropdown')) {
        dropdownMenu.style.display = 'none';
    }
});

function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

window.addEventListener('click', function (event) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (!event.target.closest('.user-dropdown')) {
        dropdownMenu.style.display = 'none';
    }
});

document.querySelectorAll('.delete-user-btn').forEach(button => {
    button.addEventListener('click', function () {
        const userItem = this.parentElement.parentElement; 
        const userName = userItem.querySelector('h3').innerText;

        if (confirm(`¿Estás seguro de que deseas eliminar a ${userName}?`)) {
            console.log(`Usuario ${userName} eliminado de la base de datos.`);

            userItem.remove();
        }
    });
});

document.querySelectorAll('.send-message-btn').forEach(button => {
    button.addEventListener('click', function () {
        const userName = this.parentElement.querySelector('h3').innerText;
        const messageBox = this.parentElement.nextElementSibling.querySelector('.message-box');
        const message = messageBox.value.trim();

        if (message) {
            console.log(`Mensaje enviado a ${userName}: ${message}`);
            alert(`Mensaje enviado a ${userName}: ${message}`);

            messageBox.value = '';
        } else {
            alert("No puedes enviar un mensaje vacío. Escribe algo antes de enviarlo.");
        }
    });
});

document.querySelector('.search-bar input').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll('.user-item').forEach(user => {
        const userName = user.querySelector('h3').innerText.toLowerCase();
        user.style.display = userName.includes(searchTerm) ? '' : 'none';
    });
});