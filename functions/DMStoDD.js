//transforms coordinates from degrees minutes seconds to decimal degrees.

function DMStoDD(degrees, minutes, seconds, hemi) {
    let dd = degrees + (minutes/60) + (seconds/3600);
    if(hemi == "S" || hemi == "W") {
        dd *= -1;
    }
    return dd;
}

export { DMStoDD };