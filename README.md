# Quantum Bogosort
This is a quantum bogosort algorithm.
It sorts a list in O(n) time.

## Assumptions:
* The many worlds hypothesis is true.
* crypto.randomInt is using a quantum mechanically random number generator.

## How it works:
* The list is shuffled using the fisher-yates shuffle.
* If the list is not sorted, the program is terminated.
* Since the many worlds hypothesis is true, there exists a world in which the program is still running.
* Any world in which the program is running must contain the sorted list.

## Usage:
```
const quantumBogoSort = require('quantum-bogosort')

const list = [2,4,5,6,2,3,4,6,7,3,2]
const sortedList = quantumBogoSort(list)

// iff we reach this point, the list is sorted
console.log(sortedList) // [2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7]
```