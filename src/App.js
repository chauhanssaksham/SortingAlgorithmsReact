import React, {useState} from 'react';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer'
import Footer from './components/Footer/Footer'

function App() {

    const [array, setArray] = useState([]);

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
        <Footer resetArray={resetArray}/>
    </>
  );
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1) + min);
}


export default App;
