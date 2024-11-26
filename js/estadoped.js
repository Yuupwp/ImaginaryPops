function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}


let selectedOrder = null;

function selectOrder(orderId) {
    selectedOrder = orderId;
    alert(`Pedido seleccionado: #${orderId}`);
}

function changeStatus(status) {
    if (selectedOrder === null) {
        alert("Por favor, selecciona un pedido primero.");
        return;
    }
    alert(`El estatus del pedido #${selectedOrder} ha cambiado a: ${status}`);
}

function sendMessage() {
    if (selectedOrder === null) {
        alert("Selecciona un pedido antes de enviar un mensaje.");
        return;
    }
    const message = document.getElementById("message").value;
    alert(`Mensaje enviado al cliente del pedido #${selectedOrder}: ${message}`);
}