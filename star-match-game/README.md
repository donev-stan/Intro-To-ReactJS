## Concepts
- Function components
- Hooks
- Optimizing state & side effects in a React components tree


### Game tutorial
- Player gets a random number of stars between 1 and 9 
- On the right is a fixed set of numbers from 1 to 9

### The goal is to use all nine numbers

- For each random number of stars, the player need to pick one or more numbers that SUM to the number of stars.

-  While the player is picking numbers they get marked as candidates (blue) - not a complete answer.
- If the player pick more than the count of stars - numbers get marked as wrong (red).
- Furthermore, the player can unpick these candidates or wrong numbers to be able to pick a correct sum.

- The game will always draw a number of stars that is playable!