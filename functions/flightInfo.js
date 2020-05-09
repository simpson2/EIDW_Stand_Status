//populates the departure and arrival table by parsing the
//json object from requestVATSIMData


async function getDepartures(data) {

    const clients = data.clients;

    const table = document.getElementById("departures_entries");
    const depCaption = document.getElementById("depCaption");

    let c = 0;

    try {
        for (let i = 0; i < clients.length; i++) {
            let client = clients[i];

            if (client.planned_depairport == "EIDW") {
                c += 1;

                let row = document.createElement("tr");
                let callsignCell = document.createElement("td");
                // callsignCell.style.textAlign = "left";
                let destCell = document.createElement("td");

                let callsign = client.callsign;
                let dest = client.planned_destairport;

                callsignCell.innerHTML = callsign;
                destCell.innerHTML = dest;

                depCaption.innerHTML = c + " Departures";

                row.appendChild(callsignCell);
                row.appendChild(destCell);
                table.appendChild(row);
            }
        }
    } catch (err) {
        console.log("ERR: " + err);
    }
}

async function getArrivals(data) {

    const clients = data.clients;

    const table = document.getElementById("arrivals_entries");
    const arrCaption = document.getElementById("arrCaption");

    let c = 0;

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

                arrCaption.innerHTML = c + " Arrivals";

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