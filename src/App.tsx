import React from 'react';
import './App.css';
import img from './ava.jpg';
function App() {
    return (
        <div className="block-back">
            <img src={img} alt="avatar"/>
            <div className="block-messages"> <p className="name"> Elena Valiuk</p>
                <p className ="message"> Наконец-то получилось!!!<span> 00.44</span></p>
            </div>
        </div>
    )
}

export default App;
