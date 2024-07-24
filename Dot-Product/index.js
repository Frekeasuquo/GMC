let vectors = [[7, 1, 1],[6, 0, 2], [5, 7, 0], [3, 1, 2], [2, 3 ,8], [0, 0, 0]]
let n = 3

// Function to calculate the product of two vectors
function dotProduct(v1, v2) {
    let product = 0;

    for (let i = 0; i < n; i++) {
        product += v1[i] * v2[i]
    }
    
    return product

}

// Finding the orthogonal vectors
for (let i = 0; i < vectors.length; i++) {

    for (let j = i + 1; j < vectors.length; j++) {
        
        if (dotProduct(vectors[i], vectors[j]) === 0) {
            console.log(`${vectors[i]} and ${vectors[j]} are orthogonal `)
        }

    }
}