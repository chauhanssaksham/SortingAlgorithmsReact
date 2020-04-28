import React, {useState, useLayoutEffect} from 'react'
import './SortingVisualizer.css'

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

const SortingVisualizer = () => {

    const [array, setArray] = useState([]);

    useLayoutEffect(()=>{
        resetArray();
    }, []);
    
    const resetArray = () => {
        const arr = [];
        for (let i=0; i<100; i++){
            arr.push(randomIntFromInterval(5,500));
        }
        setArray(arr);
    }


    return (
        <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                </div>
            ))}
        </div>
    )
}

export default SortingVisualizer
