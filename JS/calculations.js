// Constants
const G = 0.0000000000667;

var updatePosition = function(object) {
    for (let i = 0; i < celestialObjects.length; i++) {
        if (object.name != celestialObjects[i].name) {
            let r = Math.sqrt(Math.pow((celestialObjects[i].pos.y - object.pos.y),2)+Math.pow((celestialObjects[i].pos.x - object.pos.x),2))
            if (r <= celestialObjects[i].radius + object.radius + 1) {
                let PObject = {
                    x: object.mass * object.vel.x,
                    y: object.mass * object.vel.y
                };
                let PCelestial = {
                    x: celestialObjects[i].mass * celestialObjects[i].vel.x,
                    y: celestialObjects[i].mass * celestialObjects[i].vel.y
                };
                PObject.x += PCelestial.x;
                PObject.y += PCelestial.y;
                object.vel.x = (PObject.x/2)/object.mass;
                object.vel.y = (PObject.y/2)/object.mass;
            }
        }
    }
    object.pos.x = object.pos.x + object.vel.x;
    object.pos.y = object.pos.y + object.vel.y;
    return object;
}

var updateVelocity = function(object) {
    object.vel.x = object.vel.x + object.acc.x;
    object.vel.y = object.vel.y + object.acc.y;
    return object;
}

var updateAcceleration = function(object) {
    let newAcceleration = {
        x:0,
        y:0
    };
    for (let i = 0; i < celestialObjects.length; i++) {
        if (object.name !== celestialObjects[i].name) {
            let r = Math.sqrt(Math.pow((celestialObjects[i].pos.y - object.pos.y),2)+Math.pow((celestialObjects[i].pos.x - object.pos.x),2))    // Finding Distance between the two objects
            let theta = Math.atan((celestialObjects[i].pos.y - object.pos.y)/(celestialObjects[i].pos.x - object.pos.x))    // Using pos of both objects to find agnle of acceleration.
            let inverse = 1;
            if (celestialObjects[i].pos.x < object.pos.x) {
                    inverse = -1
            }
            let totalAcc = G*celestialObjects[i].mass/(Math.pow(r,2));
            newAcceleration.x = newAcceleration.x + Math.cos(theta) * totalAcc * inverse;
            newAcceleration.y = newAcceleration.y + Math.sin(theta) * totalAcc * inverse;
        }
    }
    object.acc = newAcceleration;
    return object;
}