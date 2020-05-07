//fetches the vatsim json feed from the specified URL and returns the json object of it.

const vatsim = "http://eu.data.vatsim.net/vatsim-data.json";

async function getData() {
    try {
        const res = await fetch(vatsim);
        const data = await res.json();

        return data;
    } catch (err) {
        console.log("ERROR: " + err);
    }
}

export {
    getData
};