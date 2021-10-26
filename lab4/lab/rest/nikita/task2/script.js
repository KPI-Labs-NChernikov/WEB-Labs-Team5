function processArray() {
    const entered = parseInt(enterSize(), 10);
    if (!isNaN(entered) && entered > 0) {
        alert('Відкрийте консоль, щоб побачити вхідний та вихідний масиви');
        const array = [];
        for (let i = 0; i < entered; i++)
            array.push(Math.floor(Math.random() * 100));
        console.log('Вхідний масив:');
        console.log(`(${array.length}) [${array.join(', ')}]`);
        moveMinimal(array);
        console.log('Після перенесення мінімального елементу на перше місце:');
        console.log(`(${array.length}) [${array.join(', ')}]`);
        selectionSortReversed(array);
        console.log('Вихідний масив:');
        console.log(`(${array.length}) [${array.join(', ')}]`);
    }
    else {
        alert('Введено не число або введене число не є натуральним');
    }
}

function enterSize() {
    return prompt('Введіть кількість елементів масиву', 0);
}

function moveMinimal(array) {
    if (!Array.isArray(array))
        return;
    if (array.length > 0)
    minPos = 0;
    for (let i = 1; i < array.length; i++)
        if (array[i] < array[minPos])
            minPos = i;
    for (let i = minPos; i > 0; i--)
        swapArrayItems(array, i, i - 1);
}

function swapArrayItems(array, pos1, pos2)
{
    if (!Array.isArray(array) || !Number.isInteger(pos1) || !Number.isInteger(pos2) || pos1 < 0 || pos1 >= array.length|| pos2 < 0 || pos2 >= array.length)
        return;
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
}

function selectionSortReversed(array) 
{
    if (!Array.isArray(array))
        return;
    for (let i = 0; i < array.length - 1; i++) {
        let maxPos = i;
        for (let j = i + 1; j < array.length; j++)
            if (array[j] > array[maxPos])
                maxPos = j;
        if (maxPos != i)
            swapArrayItems(array, i, maxPos);
    }
}