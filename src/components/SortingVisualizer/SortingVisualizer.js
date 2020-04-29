import React, { useLayoutEffect} from 'react'
import './SortingVisualizer.css'


const SortingVisualizer = ({resetArray, array}) => {
    useLayoutEffect(()=>{
        resetArray();
    }, []);

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
