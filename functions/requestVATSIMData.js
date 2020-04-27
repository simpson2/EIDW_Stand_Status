const vatsim = "http://eu.data.vatsim.net/vatsim-data.json";

async function getData() {
    try {
        const res = await fetch(vatsim);
        const data = await res.json();
        
        console.log(data);
        return data;
    }
    catch(err) {
        console.log("ERROR: "+err);
    }
}

export { getData };