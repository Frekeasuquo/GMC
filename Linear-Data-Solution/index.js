/*Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements - 4, 7, 2 )
Give two Solution to this problem, using a different type of data structures each time.
Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.*/

//Declaring my set values

// let set1 = [3, 1, 7, 9];
// let set2 = [2, 4, 1, 9, 3];

let set1 = [12, 13, 6, 10]
let set2 = [13, 10, 16, 15]

//Function to loop through the sets and compare them
function addTwoArrays (a, b) {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) >= 0) {
            continue
        }
        sum += a[i];
    }

    for (let i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) >= 0) {
            continue
        }
        sum += b[i];
    }

    return sum
}

console.log(addTwoArrays(set1, set2))

//Using the hash table
function addUniqueElement (a, b) {

    let hash = new Map()

    for (let i = 0; i < a.length; i++) {
        if (hash.has(set1[i]))
            hash.set(set1[i], 1 + hash.get(set1[i]))
        else
            hash.set(set1[i], 1)
    }
    for (let i = 0; i < b.length; i++) {
        if (hash.has(set2[i]))
            hash.set(set2[i], 1 + hash.get(set2[i]))
        else
            hash.set(set2[i], 1)
    }

    let sum = 0;

    for (let entry of hash) {
        if (parseInt((entry[1]).toString()) == 1)
            sum += parseInt((entry[0]).toString())
    }

    return sum

};

console.log(addUniqueElement(set1, set2));




































// function add (a, b) {
// let sum = 0
// a.forEach((el,i,arr) => { 
//     if (!b.includes(el)) {
//         sum += el
//     }
    
// });
// b.forEach((el, i, arr) =>{
//     if (!a.includes(el)) {
//         sum += el
//     }
// })
// return sum
// }

// console.log(add(set1,set2))
