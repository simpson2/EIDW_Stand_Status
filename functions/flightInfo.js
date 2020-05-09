//populates the departure and arrival table by parsing the
//json object from requestVATSIMData
import {
    isInEIDW
} from "../functions/EIDWGeofence.js"

function getDepartures(data) {

    const groundClients = isInEIDW(data);
    const clients = data.clients;

    const table = document.getElementById("departures_entries");
    const depCaption = document.getElementById("depCaption");
    const depGroundCaption = document.getElementById("depGroundCaption");

    let c = 0;
    let g = 0;

    try {
        for (let i = 0; i < clients.length; i++) {
            let client = clients[i];
            let depAirport = client.planned_depairport;
            let destAirport = client.planned_destairport;

            if (depAirport == "EIDW") {
                c += 1;

                let row = document.createElement("tr");
                let callsignCell = document.createElement("td");
                // callsignCell.style.textAlign = "left";
                let destCell = document.createElement("td");

                let callsign = client.callsign;
                let dest = client.planned_destairport;

                callsignCell.innerHTML = callsign;
                destCell.innerHTML = dest;

                row.appendChild(callsignCell);
                row.appendChild(destCell);
                table.appendChild(row);
            }
        }
        for(let i = 0; i < groundClients.length; i++) {
            let groundClient = groundClients[i];
            let depAirport = groundClient.planned_depairport;
            let destAirport = groundClient.planned_destairport;

            if((depAirport == "EIDW"  & destAirport != "EIDW") | depAirport == null) {
                console.log("DEPARTURES ON GND " + groundClient.callsign)
                g+=1;
            }
            if(depAirport == null) {

                c += 1;

                let row = document.createElement("tr");
                let callsignCell = document.createElement("td");
                // callsignCell.style.textAlign = "left";
                let destCell = document.createElement("td");

                let callsign = groundClient.callsign;
                let dest = "UNFILED";

                callsignCell.innerHTML = callsign;
                destCell.innerHTML = dest;

                row.appendChild(callsignCell);
                row.appendChild(destCell);
                table.appendChild(row);
            }
        }
        depCaption.innerHTML = c + " Departures";
        depGroundCaption.innerHTML ="(" + g + " on ground)"
    } catch (err) {
        console.log("ERR: " + err);
    }
}

function getArrivals(data) {

    const groundClients = isInEIDW(data);
    const clients = data.clients;

    const table = document.getElementById("arrivals_entries");
    const arrCaption = document.getElementById("arrCaption");
    const arrGroundCaption = document.getElementById("arrGroundCaption");

    let c = 0;
    let g = 0;

    try {
        for (let i = 0; i < clients.length; i++) {
            let client = clients[i];

            if (client.planned_destairport == "EIDW") {
                c+=1;

                let row = document.createElement("tr");
                let callsignCell = document.createElement("td");
                // callsignCell.style.textAlign = "left";
                let depCell = document.createElement("td");

                let callsign = client.callsign;
                let dep = client.planned_depairport;

                callsignCell.innerHTML = callsign;
                depCell.innerHTML = dep;

                row.appendChild(callsignCell);
                row.appendChild(depCell);
                table.appendChild(row);
            }
        }
        for(let i = 0; i < groundClients.length; i++) {
            let groundClient = groundClients[i];

            if(groundClient.planned_destairport == "EIDW") {
                console.log("ARRIVALS ON GND " + groundClient.callsign)
                g+=1;
            }
        }
        arrCaption.innerHTML = c + " Arrivals";
        arrGroundCaption.innerHTML ="(" + g + " on ground)"
    } catch (err) {
        console.log("ERR: " + err);
    }
}
export {
    getDepartures,
    getArrivals
};