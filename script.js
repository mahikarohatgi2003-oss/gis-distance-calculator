function calculateDistance() {

    let lat1 = parseFloat(document.getElementById("lat1").value);
    let lon1 = parseFloat(document.getElementById("lon1").value);

    let lat2 = parseFloat(document.getElementById("lat2").value);
    let lon2 = parseFloat(document.getElementById("lon2").value);

    const R = 6371;

    const dLat = (lat2-lat1) * Math.PI/180;
    const dLon = (lon2-lon1) * Math.PI/180;

    const a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1*Math.PI/180) *
        Math.cos(lat2*Math.PI/180) *
        Math.sin(dLon/2) *
        Math.sin(dLon/2);

    const c = 2 * Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1-a)
    );

    const distance = R * c;

    document.getElementById("result").innerHTML =
        "Distance: " + distance.toFixed(2) + " km";
}
