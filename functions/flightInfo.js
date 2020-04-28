import {
    getData
} from "./requestVATSIMData.js";

async function getDepartures() {

    const data = await getData();
    const clients = data.clients;

    const table = document.getElementById("departures_entries");

    let c = 0;
    const depCaption = document.getElementById("depCaption");

    try {
        for (let i = 0; i < clients.length; i++) {
            let client = clients[i];

            let row = document.createElement("tr");
            let callsignCell = document.createElement("td");
            // callsignCell.style.textAlign = "left";
            let destCell = document.createElement("td");

            if (client.planned_depairport === "EIDW") {

                c+=1;

                let callsign = client.callsign;
                let dest = client.planned_destairport;

                console.log("C/S: " + callsign + " | DEST: " + dest)

                callsignCell.innerHTML = callsign;
                destCell.innerHTML = dest;

                depCaption.innerHTML = c+" Departures";

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

    let c = 0;
    const arrCaption = document.getElementById("arrCaption");

    try {
        for (let i = 0; i < clients.length; i++) {
            let client = clients[i];

            let row = document.createElement("tr");
            let callsignCell = document.createElement("td");
            // callsignCell.style.textAlign = "left";
            let depCell = document.createElement("td");

            if (client.planned_destairport === "EIDW") {

                c+=1;

                let callsign = client.callsign;
                let dep = client.planned_depairport;

                console.log("C/S: " + callsign + " | DEP: " + dep)

                callsignCell.innerHTML = callsign;
                depCell.innerHTML = dep;

                arrCaption.innerHTML = c+" Arrivals";

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