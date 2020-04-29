import React from 'react'
import './Footer.css'

const Footer = ({resetArray, algos, testFunctions, array}) => {
    return (
        <footer>
            <div><a href="#!" onClick={resetArray}>Generate new array</a></div>
            <div>Est, aut laborum?</div>
            <div>
                <a href="#!" onClick={()=>{algos.mergeSort(array)}}>Merge Sort</a>
                <a href="#!">Totam, nostrum.</a>
                <a href="#!">Nulla, voluptate.</a>
                <a href="#!">Odio, reiciendis.</a>
            </div>
        </footer>
    )
}

export default Footer
