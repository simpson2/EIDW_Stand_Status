import {
    EIDWStandCoords
} from "../data/EIDWStandCoords.js";
import {
    getData
} from "./requestVATSIMData.js"

async function isInEIDW() {

    const data = await getData()
    const clients = data.clients;
    const geofence = {
        "northLat": 53.438890, //inside = < 0
        "southLat": 53.418060, //inside = > 0
        "eastLon": -6.229167, //inside = < 0
        "westLon": -6.295833 //inside = > 0
    }

    for (let i = 0; i < clients.length; i++) {
        let client = clients[i];
        let flightLat = client.latitude;
        let flightLon = client.longitude;

        if (client.clienttype === "PILOT" &&
            flightLat - geofence.northLat <= 0 &&
            flightLat - geofence.southLat >= 0 &&
            flightLon - geofence.eastLon <= 0 &&
            flightLon - geofence.westLon >= 0) {
            console.log(client.callsign);
        }
    }
}

export {
    isInEIDW
};