### Creative Coding - Term 1
### Year 4
---
Excersise 2.1 - Shape and Pattern

 - In this Exercise, we started working on displaying various shapes (in this example circle in the middle of the canvas), which will lead us to work on learning how to create a pattern in further exercises.

 - In this exercise, like in most of them, we are using variables that we used for creating Exercise 1.3 - Circle Wheel. numOfSegments, stepAngle, let radius.

 - In function setup(), we created canvas, specified color and angle modes (In this exercise we worked in RADIANS).

 - In function draw(), we used map function provided by p5 to map numOfSegments and radius values. Map function re-maps the number from one range to another. In example of radius in this exercise, map allowed us to increase or decrease radius as we move the mouse over canvas. If mouse key is closer to the center of the canvas, radius will be smaller, if its further away - radius will be greater.

- keyPressed function is added in this exercise again and it allows us to save a 'screenshot' of the Canvas if we press ctrl+S. 

```
