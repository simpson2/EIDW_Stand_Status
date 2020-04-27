const vatsim = "http://eu.data.vatsim.net/vatsim-data.json";

async function getData() {
    try {
        const res = await fetch(vatsim);
        const data = await res.json();

        //return data;

        console.log(data);
    }
    catch(err) {
        console.log("ERROR: "+err);
    }
}