// An array is declared as const s = [5, 7, 2].
// Change the array to [2, 5, 7] using various element assignment.

const s = [5, 7, 2];
function editInPlace() {
    'use strict';
    // change code below this line

    // s = [2, 5, 7]; <- this is invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
    }

    // change code above this line
}
editInPlace();