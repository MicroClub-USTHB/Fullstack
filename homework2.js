// Remove a specific Element from an array ( no predefined functions allowed)//

var array = [5, 8, 9, 33, 7];
const specificElement = 9;
var i, j, k;
var newArray = [];
j = 0;
var N = array.length;
for (i = 0; i < N; i++) {
    for (j = i + 1; j < N; j++) {
        if (array[i] == specificElement) {
            array[i] = array[j];
            N--;

        }
    }
}

console.log("our sorted array:" + array);

// Remove Duplicates from Sorted Array( no predefined functions allowed)
arr = [5, 48, 5, 5];
k = 0;
for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            newArray[k] = arr[j];
            newArray.lentgh++;

        }

    }
    k++;
}
console.log("our sorted array is:" + newArray);