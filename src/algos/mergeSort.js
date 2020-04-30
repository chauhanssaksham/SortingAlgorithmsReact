const ANIMATION_SPEED_MS_FACTOR = 10;
let arrayBars = document.getElementsByClassName('array-bar');
function changeBarsAfterDelay(mainArr, setArray, timeCounter){
    let thisTime = timeCounter[0]++;
    let thisArray = mainArr.slice();
    setTimeout(function(){
        setArray(thisArray);
        // console.log(thisTime);
    }, ANIMATION_SPEED_MS_FACTOR*thisTime);
}
function changeColorsOnCompare(i, j, timeCounter){
    let thisTime = timeCounter[0];
    timeCounter[0] += 2;
    setTimeout(()=>{
        arrayBars[i].style.background = 'red';
        arrayBars[j].style.background = 'red';
    }, ANIMATION_SPEED_MS_FACTOR*thisTime);
    setTimeout(()=>{
        arrayBars[i].style.background = 'pink';
        arrayBars[j].style.background = 'pink';
    }, (thisTime+1)*ANIMATION_SPEED_MS_FACTOR);
}
function changeColorToGreen(i, timeCounter){ //FOR BOTH AFTER AND BEFORE PUSH
    let thisTime = timeCounter[0];
    timeCounter[0] += 2;
    console.log("Called");
    setTimeout(()=>{
        arrayBars[i].style.background = 'green';
    }, ANIMATION_SPEED_MS_FACTOR*thisTime);
    setTimeout(()=>{
        arrayBars[i].style.background = 'pink';
    }, ANIMATION_SPEED_MS_FACTOR*(thisTime+1));
}
const mergeSort = (array, setArray, startingIndex, timeCounter, mainArr) => {
    if (array.length <= 1){
        return array;
    }
    const midIndex = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0,midIndex), setArray, startingIndex, timeCounter, mainArr);
    const secondHalf = mergeSort(array.slice(midIndex), setArray, startingIndex+midIndex, timeCounter, mainArr);
    const sortedArray = [];
    while(firstHalf.length > 0 && secondHalf.length>0){
        let swap = false;
        changeColorsOnCompare(startingIndex+ sortedArray.length, startingIndex+ sortedArray.length+ firstHalf.length, timeCounter);
        if (firstHalf[0] < secondHalf[0]){
            changeColorToGreen(startingIndex+sortedArray.length, timeCounter);
            sortedArray.push(firstHalf[0]);
            firstHalf.shift();
        } else {
            changeColorToGreen(startingIndex+sortedArray.length+firstHalf.length, timeCounter);
            sortedArray.push(secondHalf[0]);
            secondHalf.shift();
            swap = true;
        }
        let combinedArray = [...sortedArray, ...firstHalf, ...secondHalf];
        mainArr.splice(startingIndex, combinedArray.length, ...combinedArray);
        // changeColorToGreen(startingIndex+sortedArray.length, timeCounter);
        changeBarsAfterDelay(mainArr, setArray, timeCounter);
        if (swap) {changeColorToGreen(startingIndex+sortedArray.length-1, timeCounter);}
    }
    while (firstHalf.length > 0) {
        sortedArray.push(firstHalf[0]);
        firstHalf.shift();
        let combinedArray = [...sortedArray, ...firstHalf, ...secondHalf];
        mainArr.splice(startingIndex, combinedArray.length, ...combinedArray);
        changeBarsAfterDelay(mainArr, setArray, timeCounter);
        changeColorToGreen(startingIndex+sortedArray.length-1, timeCounter);
    }
    while (secondHalf.length > 0) {
        changeColorsOnCompare(startingIndex+ sortedArray.length, startingIndex+ sortedArray.length-1, timeCounter);
        sortedArray.push(secondHalf[0]);
        secondHalf.shift();
        let combinedArray = [...sortedArray, ...firstHalf, ...secondHalf];
        mainArr.splice(startingIndex, combinedArray.length, ...combinedArray);
        changeBarsAfterDelay(mainArr, setArray, timeCounter);
        changeColorToGreen(startingIndex+sortedArray.length-1, timeCounter);
    }
    return sortedArray;
};

export default mergeSort;