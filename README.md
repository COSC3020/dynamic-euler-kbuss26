[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3aNDMX3O)
# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

### Response

There is a large chunk of repeated work when recursively calling the $e(n)$ function.
Every non-basic recursive call down the $e(n)$ function calls the factorial
function, which we can see will do a lot of repeated work if we call said
function multiple times with $n$ decrementing by 1 each time, for
$(n + 1)! = n! * (n + 1)$.

We can avoid this repeated work by the factorial in a variable, which exists
in constant memory. For each iteration of the Euler function, we multiply the
variable by $i$ in the ith iteration from $1$ to $n$ and add 1 divided by
the variable to an accumulator to obtain an approximation of Euler's number.

In the Euler function, we iterate from $1$ to $n$
to obtain the approximation for $e$ with constant statements inside the iterative loop. The worst-case scenario is that $n$ may be greater than $1$,
so we'll need to iterate through the for-loop. The worst-case big $\Theta$ 
complexity of the algorithm therefore turns out to be $T(n) \in \Theta(n)$. 

### Sources
- main.yml file is reused from other COSC-3020 exercises
