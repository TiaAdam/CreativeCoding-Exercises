// Docking Circles - 23th of February, 2021

let points = []; // Array of points.
let minRadius = 4;
let maxRadius = 20;
function setup() {
    createCanvas(1000, 1000);
    points.push(new Docker(500, 500, 12));
    //noLoop();
}

// Class of Dockers
class Docker {
    constructor(_x, _y, _r) {
        this.position = createVector(_x, _y);
        this.radius = _r;
    }
}
function draw() {
  background(0);
    if (points.length < 500) {
        let tempDocker = new Docker(random(width), random(height), random(minRadius, maxRadius));
        let temp = dock(tempDocker);
        if (temp == null) {
            console.log("Nulled")
        }
        else {
            tempDocker.position.x = temp.newPositionX;
            tempDocker.position.y = temp.newPositionY;
            points.push(tempDocker);
        }
    }
    for (let i = 0; i < points.length; i++) {
        let dockerObject = points[i];
        stroke(0, 255, 0);
        noFill();
        ellipse(dockerObject.position.x, dockerObject.position.y, dockerObject.radius * 2, dockerObject.radius * 2)
    }
}
// At the moment this is not receiving any parameter. Consider using something here
function dock(_dockable) {
    //This is the ball we want to move (latest in Array)
    let currentBall = _dockable;
    fill(0, 220, 0)
        //ellipse(currentBall.position.x, currentBall.position.y, currentBall.radius * 2)
        //console.log(currentBall)
        // This is where we want to dock it to
    let currentPoint = 0;
    let currentDistance = 2000;
    for (let i = 0; i < points.length; i++) {
        let checkDist = dist(currentBall.position.x, currentBall.position.y, points[i].position.x, points[i].position.y) - currentBall.radius - points[i].radius;
        //console.log("Checked Distance is " + checkDist)
        if (checkDist < 0) {
            return null
        }
        if (checkDist < currentDistance) {
            currentDistance = checkDist;
            //console.log(currentDistance);
            //console.log("Current Distance is " + currentDistance + " i is "
            console.log(`Current Distance is ${currentDistance} i is ${i}`)
            currentPoint = i
        }
    }
    //console.log("Current Point is " + currentPoint)
    let dockedBall = points[currentPoint];
    let resultantV = p5.Vector.sub(currentBall.position, dockedBall.position)
    let rHeading = resultantV.heading();
    let rDist = resultantV.mag() - points[currentPoint].radius - _dockable.radius;
    // Here we thake away the calculated distance from the current position
    let newPositionX = currentBall.position.x - cos(rHeading) * rDist;
    let newPositionY = currentBall.position.y - sin(rHeading) * rDist;
    return {
        newPositionX, newPositionY
    };
}
