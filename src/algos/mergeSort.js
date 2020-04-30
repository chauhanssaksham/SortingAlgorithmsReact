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
// const mergeSort = (array) => {
//     const animations = [];
//     if (array.length <= 1) return array;
//     const auxilliaryArray = array.slice();
//     mergeSortHelper(array, 0, array.length-1, auxilliaryArray, animations);
//     return animations;
// }
// const mergeSortHelper = (mainArr, startIndex, endIndex, auxArr, animations) => {
//     if (startIndex >= endIndex) return;
//     const middleIndex = Math.floor((startIndex+endIndex)/2);
//     mergeSortHelper(auxArr, startIndex, middleIndex, mainArr, animations);
//     mergeSortHelper(auxArr, middleIndex+1, endIndex, mainArr, animations);
//     mergeSorted(mainArr, startIndex, middleIndex, endIndex, auxArr, animations);
// }

// function mergeSorted(mainArr, startIndex, middleIndex, endIndex, auxArr, animations){
//     let k = startIndex,
//         i = startIndex,
//         j = middleIndex+1;
//     while(i<= middleIndex && j <= endIndex){
//         const animation = {};
//         animation.comparision = [i,j];
//         if (auxArr[i] < auxArr[j]){
//             animation.swap = [k,i];
//             mainArr[k++] = auxArr[i++];
//         } else {
//             animation.swap = [k,j];
//             mainArr[k++] = auxArr[j++];
//         }
//         animations.push(animation);
//     }
//     while(i<=middleIndex){
//         animations.push({
//             comparision: [i, i],
//             swap: [k,i]
//         });
//         mainArr[k++] = auxArr[i++];
//     }
//     while(j<=endIndex){
//         animations.push({
//             comparision: [j, j],
//             swap: [k,j]
//         });
//         mainArr[k++] = auxArr[j++];
//     }
// } 

export default mergeSort;