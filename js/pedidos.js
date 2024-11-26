function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

 
 let pedidos = [
    {
        id: 1,
        usuario: "Usuario #1",
        producto: {
            nombre: "Funko Pop Luffy",
            descripcion: "Figura de colección edición Gear 5.",
            imagen: "Img/luffy.jpg"
        }
    },
    {
        id: 2,
        usuario: "Usuario #2",
        producto: {
            nombre: "Funko Pop Goku",
            descripcion: "Figura de colección edición Ultra Instinct.",
            imagen: "Img/goku.jpg"
        }
    }
];

const dropdownMenu = document.querySelector('.dropdown-menu');
const userOrdersList = document.querySelector('.user-orders ul');
const pedidoDetails = document.querySelector('.order-details');
const acceptBtn = document.querySelector('.accept-btn');
const rejectBtn = document.querySelector('.reject-btn');

function toggleDropdown() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function resaltarPedidoActivo(id) {
    const items = document.querySelectorAll('.user-orders ul li');
    items.forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.id) === id) {
            item.classList.add('active');
        }
    });
}

function mostrarDetallesPedido(pedido) {
    pedidoDetails.innerHTML = `
<div class="order-image">
<img src="${pedido.producto.imagen}" alt="${pedido.producto.nombre}">
</div>
<div class="order-description">
<h3>${pedido.producto.nombre}</h3>
<h4>Descripción del Pedido</h4>
<p>${pedido.producto.descripcion}</p>
<div class="buttons">
    <button class="accept-btn">Aceptar pedido</button>
    <button class="reject-btn">Rechazar pedido</button>
</div>
</div>
`;

    const aceptarBtn = document.querySelector('.accept-btn');
    const rechazarBtn = document.querySelector('.reject-btn');
    aceptarBtn.addEventListener('click', () => alert(`Pedido de ${pedido.usuario} aceptado.`));
    rechazarBtn.addEventListener('click', () => alert(`Pedido de ${pedido.usuario} rechazado.`));
}

function cargarPedidos() {
    userOrdersList.innerHTML = "";
    pedidos.forEach(pedido => {
        const li = document.createElement('li');
        li.textContent = pedido.usuario;
        li.dataset.id = pedido.id;
        li.addEventListener('click', () => {
            resaltarPedidoActivo(pedido.id);
            mostrarDetallesPedido(pedido);
        });
        userOrdersList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarPedidos();
});