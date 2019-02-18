var celestialObjects = [
    {
        name:'Sun',
        pos: {
            x: window.innerHeight/2,//Math.floor(Math.random() * (window.innerHeight - 1)), // accounting for canvas dimensions (-2 + 1)
            y: window.innerHeight/2//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {  // m/s
            x: 0,
            y: 0
        },
        acc: {  // m/s/s
            x: 0,
            y: 0
        },
        mass: 1.989 * Math.pow(10,8.5),  // Kg
        radius: 20  // m
    },
    {
        name:'Mercury',
        pos: {
            x: window.innerHeight/2,//Math.floor(Math.random() * (window.innerHeight - 1)),
            y:285//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: 0.0000001,
        radius: 1
    },
    {
        name:'Venus',
        pos: {
            x: window.innerHeight/2,//Math.floor(Math.random() * (window.innerHeight - 1)),
            y:270//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: 0.0000001,
        radius: 3
    },
    {
        name:'Earth',
        pos: {
            x: window.innerHeight/2,//Math.floor(Math.random() * (window.innerHeight - 1)),
            y:240//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: 0.0000001,
        radius: 4
    },
    {
        name:'Mars',
        pos: {
            x: window.innerHeight/2,//Math.floor(Math.random() * (window.innerHeight - 1)),
            y: 200//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: 0.0000001,
        radius: 1
    },
    {
        name:'Jupiter',
        pos: {
            x: window.innerHeight/2,//Math.floor(Math.random() * (window.innerHeight - 1)),
            y: 170//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: 0.0000001,
        radius: 7
    },
    {
        name:'Saturn',
        pos: {
            x: window.innerHeight/2,//Math.floor(Math.random() * (window.innerHeight - 1)),
            y: 140//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: 0.0000001,
        radius: 6
    },
    {
        name:'Uranus',
        pos: {
            x: window.innerHeight/2,//Math.floor(Math.random() * (window.innerHeight - 1)),
            y: 120//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: 0.0000001,
        radius: 5
    },
    {
        name:'Pluto',
        pos: {
            x: window.innerHeight/2,//Math.floor(Math.random() * (window.innerHeight - 1)),
            y: 100//Math.floor(Math.random() * (window.innerHeight - 1))
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: 0.0000001,
        radius: 1
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
    for (let i = 1; i < celestialObjects.length; i++) {
        celestialObjects[i].vel.x=Math.sqrt(G*celestialObjects[0].mass/(window.innerHeight/2 - celestialObjects[i].pos.y));
    }
    updating = setInterval(update,1000/tickrate);
}
var stop = function() {
    clearInterval(updating);
}