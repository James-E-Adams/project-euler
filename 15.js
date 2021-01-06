/*


Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?

*/

/* diagrams on site: https://projecteuler.net/problem=15

//  A parallel problem is how many combinations of 1s and 0s can you have of length 20,with exactly 10 1's and 10 0's

i.e 2x2:

1100
1010
1001
0110
0101
0011


// Or, how many combinations of 10 unique objects out of 20?

(20!/10!)/10! 20*19*18*17*16*15*14*13*12*11/10!




wow I'm such an idiot - was going 10 across and 10 down when it should be 20 across and 20 down

the answer is: 40c20 -> 40!/20!20!
137846528820
*/
