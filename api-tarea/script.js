//Rick y Morty
document.getElementById('btnRest').onclick = async () => {
    const display = document.getElementById('json-rest');
    const id = Math.floor(Math.random() * 800) + 1;
    
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        
        document.getElementById('rest-info').innerHTML = `
            <img src="${data.image}">
            <h3>${data.name}</h3>
        `;
        display.innerText = JSON.stringify(data, null, 2);
    } catch (e) {
        display.innerText = "Error en REST";
    }
};

//Datos Abiertos Colombia
document.getElementById('btnSoda').onclick = async () => {
    const display = document.getElementById('json-soda');
    display.innerText = "Consultando...";

    
    
    const datasetID = 'p6dx-8zbt'; 
    const url = `https://www.datos.gov.co/resource/${datasetID}.json?$limit=3`;

    try {
        const res = await fetch(url);
        
        if (!res.ok) throw new Error("Dataset no encontrado");

        const data = await res.json();
        display.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        // Si datos.gov.co falla, mostramos el error técnico
        display.innerText = "Error SODA: El servidor de datos.gov.co no responde o cambió el ID.";
    }
};