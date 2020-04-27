import {getDepartures, getArrivals } from "../functions/flightInfo.js";

window.onload = () => {
    getDepartures();
    getArrivals();
}