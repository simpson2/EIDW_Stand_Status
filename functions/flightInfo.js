//populates the departure and arrival table by parsing the
//json object from requestVATSIMData

import {
    DublinDepartures,
    DublinArrivals,
} from "../functions/EIDWFlights.js";

async function getDepartures() {

    const deps = await DublinDepartures();
    const c = deps.length;

    const table = document.getElementById("departures_entries");
    const depCaption = document.getElementById("depCaption");

    try {
        for (let i = 0; i < c; i++) {
            let dep = deps[i];

            let row = document.createElement("tr");
            let callsignCell = document.createElement("td");
            // callsignCell.style.textAlign = "left";
            let destCell = document.createElement("td");

            let callsign = dep.callsign;
            let dest = dep.destination;

            callsignCell.innerHTML = callsign;
            destCell.innerHTML = dest;

            depCaption.innerHTML = c + " Departures";

            row.appendChild(callsignCell);
            row.appendChild(destCell);
            table.appendChild(row);
        }
    } catch (err) {
        console.log("ERR: " + err);
    }
}

async function getArrivals() {

    const arrs = await DublinArrivals();
    const c = arrs.length;

    const table = document.getElementById("arrivals_entries");
    const arrCaption = document.getElementById("arrCaption");

    try {
        for (let i = 0; i < c; i++) {
            let arr = arrs[i];

            let row = document.createElement("tr");
            let callsignCell = document.createElement("td");
            // callsignCell.style.textAlign = "left";
            let depCell = document.createElement("td");

            let callsign = arr.callsign;
            let dep = arr.departure;

            callsignCell.innerHTML = callsign;
            depCell.innerHTML = dep;

            arrCaption.innerHTML = c + " Arrivals";

            row.appendChild(callsignCell);
            row.appendChild(depCell);
            table.appendChild(row);
        }
    } catch (err) {
        console.log("ERR: " + err);
    }
}
export {
    getDepartures,
    getArrivals
};