const vatsim = "http://eu.data.vatsim.net/vatsim-data.json";

async function getData() {
    try {
        const res = await fetch(vatsim);
        const data = await res.json();
        
        console.log(data);
        return data;
    }
    catch(err) {
        console.log("ERROR: "+err);
    }
}

async function getDepartures() {
    const data = await getData();
    const clients = data.clients;

    const table = document.getElementById("departures");

    try{
        for(i = 0; i < clients.length; i++) {
            let client = clients[i];

            let row = document.createElement("tr");
            let callsignCell = document.createElement("td");
            let destCell = document.createElement("td");

            if(client.planned_depairport === "EIDW") {
                
                let callsign = client.callsign;
                let dest = client.planned_destairport;

                console.log("C/S: "+callsign+" | DEST: "+dest)

                callsignCell.innerHTML = callsign;
                destCell.innerHTML = dest;

                row.appendChild(callsignCell);
                row.appendChild(destCell);
                table.appendChild(row);
            }
        }
    }
    catch(err) {
        console.log("ERR: "+err);
    }
}

async function getArrivals() {
    const data = await getData();
    const clients = data.clients;

    const table = document.getElementById("arrivals");

    try{
        for(i = 0; i < clients.length; i++) {
            let client = clients[i];

            let row = document.createElement("tr");
            let callsignCell = document.createElement("td");
            let depCell = document.createElement("td");

            if(client.planned_destairport === "EIDW") {
                
                let callsign = client.callsign;
                let dep = client.planned_depairport;

                console.log("C/S: "+callsign+" | DEP: "+dep)

                callsignCell.innerHTML = callsign;
                depCell.innerHTML = dep;

                row.appendChild(callsignCell);
                row.appendChild(depCell);
                table.appendChild(row);
            }
        }
    }
    catch(err) {
        console.log("ERR: "+err);
    }
}