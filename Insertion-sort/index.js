function insertionSort(newArr) {
    let n = newArr.length;

    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = newArr[i];

        // The last element of our sorted subarray
        let j = i-1; 

        while ((j > -1) && (current < newArr[j])) {
            newArr[j+1] = newArr[j];
            j--;
        }

        newArr[j+1] = current;
    }

    return newArr;
}

