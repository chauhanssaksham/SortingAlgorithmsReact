import React from 'react'
import './Footer.css'

const Footer = ({resetArray}) => {
    return (
        <footer>
            <div><a href="#!" onClick={resetArray}>Generate new array</a></div>
            <div>Est, aut laborum?</div>
            <div>
                <a href="#!">Lorem, ipsum.</a>
                <a href="#!">Totam, nostrum.</a>
                <a href="#!">Nulla, voluptate.</a>
                <a href="#!">Odio, reiciendis.</a>
            </div>
        </footer>
    )
}

export default Footer
