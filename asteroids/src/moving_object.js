import { __esModule } from "../dist/main";

function MovingObject {
    this.pos = pos; 
    this.vel = vos;
    this.radius = radius; 
    this.color = color; 

}

MovingObject.prototype.draw(ctx) {
    ctx.beginPath();
    ctx.arc(250, 250, 80, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "yellow";
    ctx.fillStyle = "#ff00ff";
    ctx.lineWidth = 30;
    ctx.stroke();
    ctx.fill();
}






module.exports = MovingObject; 