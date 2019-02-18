var x = window.innerWidth - 2;
var y = x;
if (window.innerHeight < window.innerWidth) {
    y = window.innerHeight - 2;
    x = y;
}
const rRatio = (2*y/5)/(5.906292*10**12)
const mRatio = (1.989*10**8.5)/(1.989*10**30);
var celestialObjects = [
    {
        name:'Sun',
        pos: {
            x: x/2,
            y: y/2
        },
        vel: {  // px/s
            x: 0,
            y: 0
        },
        acc: {  // px/s/s
            x: 0,
            y: 0
        },
        mass: 1.989*10**8.5,
        radius: y/30 // px
    },
    {
        name:'Mercury',
        pos: {
            x: x/2,
            y: (9*y/20) -  rRatio*57.91*10**9
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: mRatio*3.301*10**23,
        radius: 1
    },
    {
        name:'Venus',
        pos: {
            x: x/2,
            y: (9*y/20) -  rRatio*108.2*10**9
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: mRatio*4.867*10**24,
        radius: 1.5
    },
    {
        name:'Earth',
        pos: {
            x: x/2,
            y: (9*y/20) -  rRatio*149.6*10**9
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: mRatio*5.972*10**24,
        radius: 2
    },
    {
        name:'Mars',
        pos: {
            x: x/2,
            y: (9*y/20) -  rRatio*227.9*10**9
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: mRatio*6.4127*10**23,
        radius: 1.5
    },
    {
        name:'Jupiter',
        pos: {
            x: x/2,
            y: (9*y/20) -  rRatio*778.5*10**9
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: mRatio*1.899*10**27,
        radius: 3
    },
    {
        name:'Saturn',
        pos: {
            x: x/2,
            y: (9*y/20) -  rRatio*1.434*10**12
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: mRatio*5.685*10**26,
        radius: 2.5
    },
    {
        name:'Uranus',
        pos: {
            x: x/2,
            y: (9*y/20) -  rRatio*2.871*10**12
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: mRatio*8.682*10**25,
        radius: 2
    },
    {
        name:'Neptune',
        pos: {
            x: x/2,
            y: (9*y/20) -  rRatio*4.495*10**12
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: mRatio*1.024*10**26,
        radius: 2
    },
    {
        name:'Pluto',
        pos: {
            x: x/2,
            y: (9*y/20) - 2*y/5
        },
        vel: {
            x: 0,
            y: 0
        },
        acc: {
            x: 0,
            y: 0
        },
        mass: mRatio*1.471*10**22,
        radius: 0.5
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
    for (let i = 1; i < celestialObjects.length; i++) {
        celestialObjects[i].vel.x=Math.sqrt(G*celestialObjects[0].mass/(window.innerHeight/2 - celestialObjects[i].pos.y));
    }
    updating = setInterval(update,1000/tickrate);
}
var stop = function() {
    clearInterval(updating);
}
var resume = function(tickrate) {
    clearInterval(updating)
    updating = setInterval(update,1000/tickrate)
}