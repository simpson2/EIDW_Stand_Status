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
                "destination" : client.planned_destairport,
                "latitude" : client.latitude,
                "longitude" : client.longitude
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
                "departure" : client.planned_depairport,
                "latitude" : client.latitude,
                "longitude" : client.longitude
            };
        }
    }
    return output;
}

export {
    DublinDepartures,
    DublinArrivals
};