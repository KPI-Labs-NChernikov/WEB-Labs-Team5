
function bubble(arr) {
    var len = arr.length;
  
    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){ 
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
     }
    }
    return arr;
  }

function compare(arr1, arr2){
 let check;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (arr1[i] == arr2[j]) {
            console.log(arr1[i]);
            check = arr1[i];
            break;
        }       
    }
    if (check == arr1[i]) {
        break;
    }
}
}

let n = prompt("Enter n");
console.log(n);
let arr1 = [];
let arr2 = [];

for (let i = 0; i < n; i++) {
    let temp = Math.floor(Math.random()*50);
    arr1.push(temp);
}

for (let i = 0; i < n; i++) {
    let temp = Math.floor(Math.random()*50);
    arr2.push(temp);
}

console.log(arr1);
console.log(arr2);

bubble(arr1);
bubble(arr2);

console.log(arr1);
console.log(arr2);
compare(arr1, arr2);


