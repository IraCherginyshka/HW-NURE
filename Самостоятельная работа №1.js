//Cамостоятельная работа №1
//Быстрая сортировка

function barter(arr, firstIndex, secondIndex) {
  var a = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = a;
}


function sort(arr, left, right) {

  var refElem = arr[Math.floor((left + right) / 2)];
  var l = left;
  var r = right;

  while (l <= r) {

    while (arr[l] < refElem) {
      l++;
    }

    while (arr[r] > refElem) {
      r--;
    }

    if (l <= r) {
      barter(arr, l, r);
      l++;
      r--;
    }
  }

  return l;
}

function quickSort(arr, left, right) {
 var index;

  if (arr.length > 1) {

    index = sort(arr, left, right);

    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    if (right > index) {
      quickSort(arr, index, right);
    }

  }

  return arr;
}

var arrSort = [7, 9, 3, 1, 33, 27, 89, 69, 13];
var arr1 = [67, 89, 7, 0, 3, 5];

console.log(quickSort(arrSort, 0, arrSort.length - 1));
console.log(quickSort(arr1, 0, arr1.length - 1));

//Сортировка пузырьком

function barter(arr, firstIndex, secondIndex) {
  var a = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = a;
}

function bubbleSort(arr) {

 var k = 0;

 for (var i = 0; i < arr.length; i++) {
   if (arr[i] > arr[i + 1]) {
     barter(arr, i, (i + 1));
     k++;
   }
 }

 if (k > 0) {
   bubbleSort(arr);
 }

 return arr;
}

var arrSort = [3, 7, 5, 1, 0, 2];
var arr1 = [4, 5, 8, 9, 1, 0, 23, 68, 54, 97, 46, 34];

console.log(bubbleSort(arrSort));
console.log(bubbleSort(arr1));
