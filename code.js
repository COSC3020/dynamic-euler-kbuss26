/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Apr. 09 2024
    Sources:
    - https://uwyo.instructure.com/courses/583691/files/folder/slides?preview=79755872
*/

// Iterative factorial to highlight where repeated work may exist
function factorial(n) {
    if(n === 0) return 1;
    else {
        var r = 1;
        for(var i = 1; i <= n; i++)
        r *= i;
    }
    return r;
}

/*  New function - does not utilize factorial function at all
    since we can use constant memory, for (n + 1)! = n! * (n + 1).
    With bottom-up dynamic programming, we can use the smallest
    number (1) and build up multiplication and use each result for
    each iteration */
function e(n) {
    var result = 1;
    var mulAccum = 1;
    for (var i = 1; i <= n; i++) {
        mulAccum *= i;
        result += 1.0 / mulAccum;
    }
    return result;
}
