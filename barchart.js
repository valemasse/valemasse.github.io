// crear un div desde javascript en vez de selecionar uno predeterminado de html
let nuevoDiv = document.createElement('div');

// Asignar un id único al nuevo div
nuevoDiv.id = 'barchart 1';

// Insertar el nuevo div dentro de un contenedor existente
document.body.appendChild(nuevoDiv);


var trace1 = {
    x: ['Music of the Sun', 'A girl like me', 'Good Girl Gone Bad', 'Rated R', 'Loud', 'Talk That Talk', 'Unapologetic', 'Anti'],
    y: [623000, 1400000, 2800000, 1130000, 1800000, 1150000, 1200000, 603000],
    type: 'bar'
};

var data = [trace1];

var layout = {
    title: 'Ventas de Rihanna en USA por álbum',
    xaxis: { title: 'Álbum' },
    yaxis: { title: 'Ventas' }
};

Plotly.newPlot('barchart 1', data, layout);