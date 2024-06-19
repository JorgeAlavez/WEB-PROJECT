<?php
require_once __DIR__ . '/vendor/autoload.php';

try {
   


// Crear instancia de mPDF
$mpdf = new \Mpdf\Mpdf();

// Escribir algo de HTML para el contenido del PDF
$html = '<h1>Hola Mundo</h1><p>Esto es un ejemplo de PDF generado con mPDF en PHP.</p>';

// Escribir el HTML en el PDF
$mpdf->WriteHTML($html);

// Generar el PDF y enviarlo al navegador
$mpdf->Output('mi_archivo_pdf.pdf', 'I');
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage();
}



?>