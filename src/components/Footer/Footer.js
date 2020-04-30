import React from 'react'
import './Footer.css'

const Footer = ({resetArray, algos, testFunctions, numElements, setNumElements}) => {


    return (
        <footer>
            <div><a href="#!" onClick={resetArray}>Generate new array</a></div>
            <div className="flex-parent">
                <div>
                <span>Number of elements</span>
                <span>
                <input type="range" min="5" max="100" value={numElements} className="slider" id="myRange" onChange={e => setNumElements(e.target.value)} onMouseUp={resetArray}/>
                {numElements}
                </span>
                </div>
                
            </div>
            <div className="flex-parent">
                <div>
                    <a href="#!" onClick={algos.mergeSort}>Merge Sort</a>
                    <a href="#!" onClick={()=>{testFunctions.mergeSortTest()}}>Merge Test</a>
                </div>
                <div>
                    <a href="#!" >Bubble Sort</a>
                    <a href="#!" >Bubble Test</a>
                </div>
                <div>
                    <a href="#!" >Quick Sort</a>
                    <a href="#!" >Quick Test</a>
                </div>
                <div>
                    <a href="#!" >Heap Sort</a>
                    <a href="#!" >Heap Test</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
