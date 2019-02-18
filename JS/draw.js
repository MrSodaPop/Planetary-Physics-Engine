var draw = function(objects) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = "#FFFFFF";
    for (let i = 0; i < objects.length; i++) {
        ctx.beginPath();
        ctx.arc(objects[i].pos.x,objects[i].pos.y,objects[i].radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}