// -------------------     BUBBLE SORT     ----------------------
// scans the list and put biggest item to the end of the list
// O(n^2)

let numbers = [3, 5, 7, 10, 2, 6, 7]

function bubbleSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(numbers));


// -------------------      QUICK SORT     ----------------------
// Quick sort is a divide-and-conquer algorithm that sorts an array by choosing a pivot element 
// and partitioning the array into two subarrays: one containing elements smaller than the pivot, 
// and the other containing elements larger than the pivot. 
// The two subarrays are then recursively sorted until the entire array is sorted.
// perform, at best and on average: O(n log (n)), in the worst case: O(n2)

function quickSort (arr) {
    if (arr.length <= 1) {
        return arr;
      }
    
      let pivot = arr[0];
      let leftArr = [];
      let rightArr = [];
    
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
          leftArr.push(arr[i]);
        } else {
          rightArr.push(arr[i]);
        }
      }
    
      return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}