### Creative Coding - Term 1
### Year 4
---
Excersise 2.3 - Displaying randomized pattern

- In this Exercise, we worked on displaying a random pattern, based on random() function provided to us by P5. We started by working with displaying random lines, but later finish product ended up being a display of two triangles filled with different colors - which later form a two-colored squares or one-colored squares displayed on the Canvas.

- Random() function takes either 0, 1 or 2 arguments.
If no argument is given, returns a random number from 0 up to (but not including) 1.
If one argument is given and it is a number, returns a random number from 0 up to (but not including) the number.
If one argument is given and it is an array, returns a random element from that array.
If two arguments are given, returns a random number from the first argument up to (but not including) the second argument.

- Besides the for loop that we had already created for the purpose of previous Exercises, we created an If statements which displays triangles of different colors:

// If statements, which will display either output when it's 0 or 1.
    if(random(1) > 0.5){
      noStroke();
      fill(300,19,78);
      //line(0,0,squareSize,squareSize);
      triangle(0,0,35,0,35,35);
      fill(344,57,91);
      triangle(35,35,0,35,0,0);

    } else if(random(0) < 0.5){
      noStroke();
      fill(60,40,99);
      //fill(lerpedColor);
      //line(0,0,squareSize,squareSize);
      //line(0,squareSize,squareSize,0);
      triangle(0,0,0,35,35,0);
      fill(300,55,91);
      triangle(35,35,35,0,0,35);

    }
pop();





```
