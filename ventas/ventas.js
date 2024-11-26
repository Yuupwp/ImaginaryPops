const salesData = [
    { date: '2023-01-01', amount: 100 },
    { date: '2023-01-05', amount: 200 },
    { date: '2023-01-10', amount: 150 },
    { date: '2023-02-01', amount: 300 },
    { date: '2023-02-05', amount: 250 },
    { date: '2023-02-10', amount: 400 },
];

document.getElementById('salesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const salesTable = document.getElementById('sales-table');
    
    // Limpiar la tabla
    salesTable.innerHTML = '';

    // Filtrar las ventas
    const filteredSales = salesData.filter(sale => {
        const saleDate = new Date(sale.date);
        return saleDate >= startDate && saleDate <= endDate;
    });

    // Mostrar las ventas filtradas
    filteredSales.forEach(sale => {
        const row = document.createElement('div');
        row.innerHTML = `<p>Fecha: ${sale.date} - Monto: ${sale.amount}</p>`;
        salesTable.appendChild(row);
    });

    if (filteredSales.length === 0) {
        const row = document.createElement('div');
        row.innerHTML = `<p>No se encontraron ventas en este rango de fechas.</p>`;
        salesTable.appendChild(row);
    }
});