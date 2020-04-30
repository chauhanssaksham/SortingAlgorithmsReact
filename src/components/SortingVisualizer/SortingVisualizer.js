import React, { useLayoutEffect} from 'react'
import './SortingVisualizer.css'


const SortingVisualizer = ({resetArray, array, numElements}) => {
    useLayoutEffect(()=>{
        resetArray();
    }, []);

    const getWidth = () => {
        return 40 - (Math.floor((numElements)/6)+1)*2;
    }

    return (
        <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" key={idx} style={{height: `${value}px`, width: getWidth()}}>
                </div>
            ))}
        </div>
    )
}

export default SortingVisualizer
