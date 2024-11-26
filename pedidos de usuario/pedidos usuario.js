const steps = [
    {
        date: "Lunes 25 Sep",
        time: "17:52",
        status: "Pedido entregado, recibido por (nombre)"
    },
    {
        date: "Lunes 25 Sep",
        time: "12:20",
        status: "Pedido en transito en direcciona tu domicilio"
    },
    {
        date: "Viernes 22 Sep",
        time: "15:00",
        status: "Pedido empacado listo para enviar"
    },
    {
        date: "Jueves 21 Sep",
        time: "14:40",
        status: "Orden creada"
    }
];

const orders = [
    {
        id: 0,
        details: [
            {
                date: "Lunes 25 Sep",
                time: "17:52",
                status: "Pedido entregado, recibido por (nombre)"
            },
            {
                date: "Lunes 25 Sep",
                time: "12:20",
                status: "Pedido en transito en direcciona tu domicilio"
            },
            {
                date: "Viernes 22 Sep",
                time: "15:00",
                status: "Pedido empacado listo para enviar"
            },
            {
                date: "Jueves 21 Sep",
                time: "14:40",
                status: "Orden creada"
            }
        ]
    },
    {
        id: 1,
        details: [
            {
                date: "Lunes 25 Sep",
                time: "17:52",
                status: "Pedido entregado, recibido por (nombre)"
            },
            {
                date: "Lunes 25 Sep",
                time: "12:20",
                status: "Pedido en transito en direcciona tu domicilio"
            },
            {
                date: "Viernes 22 Sep",
                time: "15:00",
                status: "Pedido empacado listo para enviar"
            },
            {
                date: "Jueves 21 Sep",
                time: "14:40",
                status: "Orden creada"
            }
        ]
    },
    {
        id: 2,
        details: [
            {
                date: "Lunes 25 Sep",
                time: "17:52",
                status: "Pedido entregado, recibido por (nombre)"
            },
            {
                date: "Lunes 25 Sep",
                time: "12:20",
                status: "Pedido en transito en direcciona tu domicilio"
            },
            {
                date: "Viernes 22 Sep",
                time: "15:00",
                status: "Pedido empacado listo para enviar"
            },
            {
                date: "Jueves 21 Sep",
                time: "14:40",
                status: "Orden creada"
            }
        ]
    }
];

document.getElementById('confirmDelivery').addEventListener('click', () => {
    alert('Entrega confirmada');
});

document.getElementById('notReceived').addEventListener('click', () => {
    alert('Pedido no recibido');
});

function changeOrderStatus(orderId) {
    const order = orders.find(o => o.id === orderId);
    const leftDiv = document.querySelector('.order-details .left');
    leftDiv.innerHTML = '';

    order.details.forEach(detail => {
        const pDate = document.createElement('p');
        pDate.innerHTML = `<strong>${detail.date}</strong>`;
        leftDiv.appendChild(pDate);

        const pStatus = document.createElement('p');
        pStatus.textContent = `${detail.time} ${detail.status}`;
        leftDiv.appendChild(pStatus);
    });

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';

    const confirmButton = document.createElement('button');
    confirmButton.id = 'confirmDelivery';
    confirmButton.textContent = 'Confirmar entrega';
    confirmButton.addEventListener('click', () => {
        alert('Entrega confirmada');
    });

    const notReceivedButton = document.createElement('button');
    notReceivedButton.id = 'notReceived';
    notReceivedButton.textContent = 'No recibi mi pedido';
    notReceivedButton.addEventListener('click', () => {
        alert('Pedido no recibido');
    });

    buttonsDiv.appendChild(confirmButton);
    buttonsDiv.appendChild(notReceivedButton);
    leftDiv.appendChild(buttonsDiv);
}