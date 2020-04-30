const mergeSort = (array, setArray, startingIndex, timeCounter, mainArr) => {
    if (array.length <= 1){
        return array;
    }
    const midIndex = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0,midIndex), setArray, 0, timeCounter, mainArr);
    const secondHalf = mergeSort(array.slice(midIndex), setArray, midIndex, timeCounter, mainArr);
    const sortedArray = [];
    let i=0, j=0;
    let firstHalfLength = firstHalf.length, secondHalfLength = secondHalf.length;
    while(i<firstHalfLength && j<secondHalfLength){
        if (firstHalf[0] < secondHalf[0]){
            sortedArray.push(firstHalf[0]);
            i++;
            firstHalf.shift();
        } else {
            sortedArray.push(secondHalf[0]);
            j++;
            secondHalf.shift();
        }
        let combinedArray = [...sortedArray, ...firstHalf, ...secondHalf];
        mainArr.splice(startingIndex, combinedArray.length, ...combinedArray);
        setArray(mainArr);
    }
    while (i<firstHalfLength) {
        sortedArray.push(firstHalf[0]);
        i++;
        firstHalf.shift();
        let combinedArray = [...sortedArray, ...firstHalf, ...secondHalf];
        mainArr.splice(startingIndex, combinedArray.length, ...combinedArray);
        setArray(mainArr);
    }
    while (j<secondHalfLength) {
        sortedArray.push(secondHalf[0]);
        j++;
        secondHalf.shift();
        let combinedArray = [...sortedArray, ...firstHalf, ...secondHalf];
        mainArr.splice(startingIndex, combinedArray.length, ...combinedArray);
        setArray(mainArr);
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