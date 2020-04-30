import React from 'react'
import './Footer.css'

const Footer = ({resetArray, algos, testFunctions}) => {
    return (
        <footer>
            <div><a href="#!" onClick={resetArray}>Generate new array</a></div>
            <div>Number of elements</div>
            <div className="sortButtons">
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
