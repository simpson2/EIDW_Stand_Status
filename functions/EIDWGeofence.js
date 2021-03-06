import {
    EIDWStandCoords
} from "../data/EIDWStandCoords.js";

function isInEIDW(data) {

    const clients = data.clients;
    const geofence = {
        "northLat": 53.438890, //inside = < 0
        "southLat": 53.418060, //inside = > 0
        "eastLon": -6.229167, //inside = < 0
        "westLon": -6.295833 //inside = > 0
    }
    let output = [];

    for (let i = 0; i < clients.length; i++) {
        let client = clients[i];
        let flightLat = client.latitude;
        let flightLon = client.longitude;

        if (client.clienttype == "PILOT" &&
            flightLat - geofence.northLat <= 0 &&
            flightLat - geofence.southLat >= 0 &&
            flightLon - geofence.eastLon <= 0 &&
            flightLon - geofence.westLon >= 0) {
            output.push(client);
        }
    }
    return output;
}

export {
    isInEIDW
};