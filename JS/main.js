var celestialObjects = [
    {
        name:'Mass One',
        pos: {
            x: 150,//Math.floor(Math.random() * (window.innerHeight - 1)), // accounting for canvas dimensions (-2 + 1)
            y: 150//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {  // m/s
            x: 0.15,
            y: 0
        },
        acc: {  // m/s/s
            x: 0,
            y: 0
        },
        mass: Math.pow(15,10),  // Kg
        radius: 10  // m
    },
    {
        name:'Mass Two',
        pos: {
            x: window.innerHeight - 150,//Math.floor(Math.random() * (window.innerHeight - 1)),
            y: window.innerHeight - 150//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {
            x: -0.15,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: Math.pow(15,10),
        radius: 10
    }
]

var update = function() {
    var updatedObjects = [];
    for (let i = 0; i < celestialObjects.length; i++) {
        updatedObjects[i] = celestialObjects[i];
    }
    for (let i = 0; i < updatedObjects.length; i++) {
        updatedObjects[i] = updatePosition(celestialObjects[i]);
        updatedObjects[i] = updateVelocity(celestialObjects[i]);
        updatedObjects[i] = updateAcceleration(celestialObjects[i]);
    }
    
    for (let i = 0; i < celestialObjects.length; i++) {
        celestialObjects[i] = updatedObjects[i];
    };
    draw(celestialObjects);
}

var updating;
var start = function(tickrate) {
    updating = setInterval(update,1000/tickrate);
}
var stop = function() {
    clearInterval(updating);
}