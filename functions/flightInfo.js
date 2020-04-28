import {
    getData
} from "./requestVATSIMData.js";

async function getDepartures() {
    const data = await getData();
    const clients = data.clients;

    const table = document.getElementById("departures_entries");

    try {
        for (let i = 0; i < clients.length; i++) {
            let client = clients[i];

            let row = document.createElement("tr");
            let callsignCell = document.createElement("td");
            // callsignCell.style.textAlign = "left";
            let destCell = document.createElement("td");

            if (client.planned_depairport === "EIDW") {

                let callsign = client.callsign;
                let dest = client.planned_destairport;

                console.log("C/S: " + callsign + " | DEST: " + dest)

                callsignCell.innerHTML = callsign;
                destCell.innerHTML = dest;

                row.appendChild(callsignCell);
                row.appendChild(destCell);
                table.appendChild(row);
            }
        }
    } catch (err) {
        console.log("ERR: " + err);
    }
}

async function getArrivals() {

    const data = await getData();
    const clients = data.clients;

    const table = document.getElementById("arrivals_entries");

    try {
        for (let i = 0; i < clients.length; i++) {
            let client = clients[i];

            let row = document.createElement("tr");
            let callsignCell = document.createElement("td");
            // callsignCell.style.textAlign = "left";
            let depCell = document.createElement("td");

            if (client.planned_destairport === "EIDW") {

                let callsign = client.callsign;
                let dep = client.planned_depairport;

                console.log("C/S: " + callsign + " | DEP: " + dep)

                callsignCell.innerHTML = callsign;
                depCell.innerHTML = dep;

                row.appendChild(callsignCell);
                row.appendChild(depCell);
                table.appendChild(row);
            }
        }
    } catch (err) {
        console.log("ERR: " + err);
    }
}

export {
    getDepartures,
    getArrivals
};