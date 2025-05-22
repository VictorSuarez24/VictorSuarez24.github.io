const btn = document.querySelector(".btn");
const body = document.querySelector("body");

function controlarLuz(accion) {
    const url = `http://localhost:3000/api/services/light/turn_${accion}`;
    
    fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ entity_id: 'light.wiz_rgbw_tunable_1bd5b6' }),
    })
    .then(response => {
    if (!response.ok) {
        return Promise.reject('Error en la solicitud: ' + response.statusText);
    }
    return response.json();
    })
    .then(data => {
    console.log('Respuesta:', data);
    obtenerEstado(); // Actualizar estado despues de cambiar la luz
    })
    .catch(error => {
    console.error('Error:', error);
    });
}

btn.onclick = function(){
    body.classList.toggle("on");
    if (body.classList.contains('on')) {
        controlarLuz("on");
    } else {
        controlarLuz("off");
    }
}