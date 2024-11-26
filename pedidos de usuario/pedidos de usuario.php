<?php
// Verifica si se ha enviado una solicitud para exportar el pedido
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtiene los datos del formulario
    $recibido_por = isset($_POST['recibido_por']) ? $_POST['recibido_por'] : 'Desconocido';
    $pedido_id = '000';
    $pedido = [
        'id' => $pedido_id,
        'fecha' => 'Lunes 25 Sep',
        'detalles' => [
            '17:52 Pedido entregado, recibido por ' . $recibido_por,
            '12:20 Pedido en transito en direccion a tu domicilio',
            'Viernes 22 Sep - 15:00 Pedido empacado listo para enviar',
            'Jueves 21 Sep - 14:40 Orden creada',
        ],
        'productos' => [
            ['id' => '000', 'nombre' => 'Funko pop #13131', 'descripcion' => 'Lorem ipsum dolor sit amet'],
            // Agrega más productos si es necesario
        ]
    ];

    // Configura el encabezado para la descarga del archivo CSV
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="verificacion_pedido_' . $pedido_id . '.csv"');

    // Abre la salida de PHP para escribir el CSV
    $output = fopen('php://output', 'w');

    // Escribe los encabezados
    fputcsv($output, ['ID del Pedido', 'Fecha', 'Detalles']);
    fputcsv($output, [$pedido['id'], $pedido['fecha'], implode('; ', $pedido['detalles'])]);

    // Escribe los productos
    fputcsv($output, []);
    fputcsv($output, ['ID Producto', 'Nombre', 'Descripción']);
    foreach ($pedido['productos'] as $producto) {
        fputcsv($output, [$producto['id'], $producto['nombre'], $producto['descripcion']]);
    }

    // Cierra el archivo
    fclose($output);
    exit();
} else {
    echo "No se ha enviado el formulario correctamente.";
}
?>