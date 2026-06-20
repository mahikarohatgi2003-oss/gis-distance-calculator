function loadExample(){

document.getElementById("lat1").value = 28.6139;
document.getElementById("lon1").value = 77.2090;

document.getElementById("lat2").value = 19.0760;
document.getElementById("lon2").value = 72.8777;

}

function resetForm(){

document.getElementById("lat1").value="";
document.getElementById("lon1").value="";
document.getElementById("lat2").value="";
document.getElementById("lon2").value="";
document.getElementById("result").innerHTML="";

}

function calculateDistance() {

let lat1 = parseFloat(document.getElementById("lat1").value);
let lon1 = parseFloat(document.getElementById("lon1").value);

let lat2 = parseFloat(document.getElementById("lat2").value);
let lon2 = parseFloat(document.getElementById("lon2").value);

if(
isNaN(lat1) ||
isNaN(lon1) ||
isNaN(lat2) ||
isNaN(lon2)
){
document.getElementById("result").innerHTML =
"⚠️ Please enter all coordinates.";
return;
}

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
const meters = distance * 1000;

document.getElementById("result").innerHTML =
`
Distance<br><br>
${distance.toFixed(2)} km<br>
${meters.toFixed(0)} meters
`;

}
