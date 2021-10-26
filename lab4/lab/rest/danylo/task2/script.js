let n = prompt("Введіть кількість елементів в масиві");
console.log(n);
let arr = [];
let copyArr = [];
for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
    copyArr[i] = arr[i];
}
console.log("Початковий масив: ");
console.log(arr);
let max = Math.max.apply(Math, arr);
let min = Math.min.apply(Math, arr);
console.log("Максимальний елемент: ");
console.log(max);
console.log("Мінімальний елемент: ");
console.log(min);
let inMax = arr.indexOf(max);
let inMin = arr.indexOf(min);
let sum = 0;
if(inMin < inMax){
    for (let i = inMin + 1; i < inMax; i++) {
        sum += arr[i];
    }
} else{
    for (let i = inMax + 1; i < inMin; i++) {
        sum += arr[i];
    }
}
console.log("Сума елементів між максимальним та мінімальним значеням: ");
console.log(sum);

function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    var pivot = array[0];
    var left = [];
    var right = [];
    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
};

arr = quicksort(arr);
console.log('Початковий масив: ');
console.log(copyArr);
console.log('Відсортований масив за допомогою швидкого сортування: ');
console.log(arr);