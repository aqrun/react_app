import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

export function run(){
    ReactDOM.render(<App/> , 
        document.getElementById('root')
    );
}