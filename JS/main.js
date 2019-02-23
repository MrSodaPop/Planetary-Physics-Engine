var x = window.innerWidth - 2;
var y = x;
if (window.innerHeight < window.innerWidth) {
    y = window.innerHeight - 2;
    x = y;
}

var celestialObjects = [
    {
        name:'Alpha',
        pos: {
            x: x/2,
            y: y/2
        },
        vel: {  // px/s
            x: 0,
            y: .1
        },
        acc: {  // px/s/s
            x: 0,
            y: 0
        },
        mass: 1.989*10**12,
        radius: y/7 // px
    },
    {
        name:'Beta',
        pos: {
            x: 3*x/4,
            y: 3*y/4
        },
        vel: {  // px/s
            x: 0,
            y: 0
        },
        acc: {  // px/s/s
            x: 0,
            y: 0
        },
        mass: 1.989*10**10,
        radius: y/35 // px
    },
    {
        name:'Gamma',
        pos: {
            x: x/4,
            y: y/4
        },
        vel: {  // px/s
            x: 0,
            y: 0
        },
        acc: {  // px/s/s
            x: 0,
            y: 0
        },
        mass: 1.989*10**9,
        radius: y/80 // px
    },
    {
        name:'Delta',
        pos: {
            x: 3*x/4,
            y: y/4
        },
        vel: {  // px/s
            x: 0,
            y: 0
        },
        acc: {  // px/s/s
            x: 0,
            y: 0
        },
        mass: 1.989*10**10.5,
        radius: y/25 // px
    },
    {
        name:'Omega',
        pos: {
            x: x/4,
            y: 3*y/4
        },
        vel: {  // px/s
            x: 0,
            y: 0
        },
        acc: {  // px/s/s
            x: 0,
            y: 0
        },
        mass: 1.989*10**9.5,
        radius: y/60 // px
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
    clearInterval(updating)
    updating = setInterval(update,1000/tickrate);
}
var stop = function() {
    clearInterval(updating);
}
var resume = function(tickrate) {
    clearInterval(updating)
    updating = setInterval(update,1000/tickrate)
}