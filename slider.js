const rides = [
    {
        name: "at1", //fractal land
        height: 110,
    },
    {
        name: "at2", //vr world
        height: 100,
    },
    {
        name: "at3", //rollercoaster
        height: 140,
    },
];

var slideAction = function(userHeight) {
let value = parseInt(userHeight);

for (let i=0; i<3; i++) {
    if (rides[i].height > value) {
        document.getElementById(rides[i].name).style.display = "none";
    }
    else if (rides[i].height <= value) {
        document.getElementById(rides[i].name).style.display = "grid";
    }
};
}
