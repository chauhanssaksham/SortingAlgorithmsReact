import React, {useState} from 'react';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer'
import Footer from './components/Footer/Footer'
import mergeSort from './algos/mergeSort'

function App() {
    
    const [array, setArray] = useState([]);

    const testFunctions = {
        mergeSortTest: () => {
            for (let i=0; i<100; i++){
                const arr = [];
                for (let j=0; j<randomIntFromInterval(1,100); j++){
                    arr.push(randomIntFromInterval(-1000,1000));
                }
                const JSsortedArray = [...array].sort(sortNumber);
                const sortedArray = mergeSort(array);
                if (areArraysEqual(JSsortedArray, sortedArray)) {
                    console.log('true');
                } else {
                    console.log("FALSE!");
                    break;
                }
            }
        }
    };
    const algos = {
        mergeSort: (arr)=>{
            setArray(mergeSort(arr));
        }
    };

    const resetArray = (e) => {
        if(e){
        e.preventDefault();
        }
        const arr = [];
        for (let i=0; i<100; i++){
            arr.push(randomIntFromInterval(5,500));
        }
        setArray(arr);
    }

  return (
    <>
        <SortingVisualizer resetArray={resetArray} array={array}/> 
        <Footer array={array} resetArray={resetArray} testFunctions={testFunctions} algos={algos}/>
    </>
  );
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

const areArraysEqual = (arr1, arr2)=>{
    if (arr1.length !== arr2.length){
        return false;
    }
    for (let i=0; i<arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

function sortNumber(a, b) {
    return a - b;
  }
export default App;
