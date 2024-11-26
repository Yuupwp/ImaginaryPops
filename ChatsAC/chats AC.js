let currentClient = null;
let messages = {
    1: [],
    2: [],
    3: []
};

function selectClient(clientId) {
    currentClient = clientId;
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = ''; 

    messages[clientId].forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.textContent = msg;
        chatWindow.appendChild(messageElement);
    });
}

function sendMessage() {
    if (currentClient === null) {
        alert("Por favor, selecciona un cliente primero.");
        return;
    }

    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message === '') {
        alert("No puedes enviar un mensaje vacío.");
        return;
    }
    messages[currentClient].push("Soporte: " + message);

    const chatWindow = document.getElementById('chatWindow');
    const messageElement = document.createElement('div');
    messageElement.textContent = "Soporte: " + message;
    chatWindow.appendChild(messageElement);

    messageInput.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function markAsComplete() {
    if (currentClient === null) {
        alert("Por favor, selecciona un cliente primero.");
        return;
    }
    alert("Chat con Cliente " + currentClient + " marcado como completo.");
}

function markAsPending() {
    if (currentClient === null) {
        alert("Por favor, selecciona un cliente primero.");
        return;
    }
    alert("Chat con Cliente " + currentClient + " marcado como pendiente.");
}