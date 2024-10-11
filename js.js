let clientesCount = 67;
let zPCount = 12;
let duracionCount = "148:50"; // Manejar como un número total de minutos
let aceptadosCount = 248;
let rechazadosCount = 5;
let rendimientoCount = 218.8;

function cambiarDatos() {
    // Incrementar los valores
    clientesCount += 1; // Aumenta en 1
    zPCount += 1; // Aumenta en 1
    aceptadosCount += 1; // Aumenta en 1
    rechazadosCount += 1; // Aumenta en 1

    // Aumentar duración en minutos (puedes ajustar el incremento)
    let [horas, minutos] = duracionCount.split(':').map(Number);
    minutos += 5; // Aumenta en 5 minutos
    if (minutos >= 60) {
        horas += 1;
        minutos -= 60;
    }
    duracionCount = `${horas}:${minutos.toString().padStart(2, '0')}`;

    // Aumentar rendimiento en kg (puedes ajustar el incremento)
    rendimientoCount += 0.5; // Aumenta en 0.5 kg

    // Actualizar el DOM
    document.getElementById('clientes').innerHTML = `${clientesCount} <span></span>`;
    document.getElementById('z_p').innerHTML = `${zPCount} <span>(${Math.floor((zPCount / clientesCount) * 100)}%)</span>`;
    document.getElementById('duracion').innerHTML = duracionCount + ' <span>hr</span>';
    document.getElementById('aceptados').innerHTML = `${aceptadosCount} <span>un</span>`;
    document.getElementById('rechazados').innerHTML = `${rechazadosCount} <span>un</span>`;
    document.getElementById('rendimiento').innerHTML = rendimientoCount.toFixed(1) + ' kg';
}

// Cargar los botones de descarga
document.getElementById('downloadBtn').addEventListener('click', function () {
    // Datos a exportar
    const data = [
        ['Guia', 'Patente', 'Nombre', 'Estado', 'Fecha'],
        ['908772', 'FDK3PH', 'Alejandro', 'Abierta', '20/07/2024'],
        ['608222', 'LJK922', 'Daniela', 'Cerrada', '20/08/2024'],
        ['445233', 'FOJP3F', 'Rodrigo', 'Abierta', '20/06/2024'],
    ];

    // Crear una hoja de trabajo
    const ws = XLSX.utils.aoa_to_sheet(data);

    // Crear un libro de trabajo
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');

    // Descargar el archivo Excel
    XLSX.writeFile(wb, 'Dato Chofer.xlsx');
});

// Cargar los botones de agrandar y cerrar

document.addEventListener('DOMContentLoaded', () => {
    const agrandarBtns = document.querySelectorAll('.agrandar-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    agrandarBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const expandedBox = btn.closest('.grid-box-item1').querySelector('.expanded-box');
            const overlay = btn.closest('.grid-box-item1').querySelector('.overlay');
            expandedBox.style.display = 'block'; // Mostrar el cuadro expandido
            overlay.style.display = 'block'; // Mostrar el fondo oscuro
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const expandedBox = btn.closest('.expanded-box');
            const overlay = btn.closest('.grid-box-item1').querySelector('.overlay');
            expandedBox.style.display = 'none'; // Ocultar el cuadro expandido
            overlay.style.display = 'none'; // Ocultar el fondo oscuro
        });
    });
});

function toggleExpand() {
    const overlay = document.querySelector('.overlay');
    const expandedBox = document.querySelector('.expanded-box');
    const isVisible = expandedBox.style.display === 'block';

    overlay.style.display = isVisible ? 'none' : 'block';
    expandedBox.style.display = isVisible ? 'none' : 'block';
}