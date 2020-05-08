//an arguably unnecessary file/function
//but it does make things neater overall in flightInfo.js

import {
    getData
} from "./requestVATSIMData.js"


async function DublinDepartures() {

    const data = await getData();
    const clients = data.clients;
    let c = -1;
    let output = [];

    for (let i = 0; i < clients.length; i++) {
        let client = clients[i];

        if (client.planned_depairport === "EIDW") {
            c+=1

            output[c] = {
                "callsign" : client.callsign,
                "dest" : client.planned_destairport,
                "lat" : client.latitude,
                "lon" : client.longitude
            };
        }
    }
    return output;
}

async function DublinArrivals() {

    const data = await getData();
    const clients = data.clients;
    let c = -1;
    let output = [];

    for (let i = 0; i < clients.length; i++) {
        let client = clients[i];

        if (client.planned_destairport === "EIDW") {
            c+=1

            output[c] = {
                "callsign" : client.callsign,
                "dep" : client.planned_depairport,
            };
        }
    }
    return output;
}

export {
    DublinDepartures,
    DublinArrivals
};