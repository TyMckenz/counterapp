import './App.css';
import React from 'react';
import Counter from './component/counter'
import NavBar from './component/navbar';

function App() {

    return (
        <>
        <NavBar totalCounters={0}/>
        <div>
        <Counter counter='1'/>
        <Counter counter='1'/>
        <Counter counter='1'/>
        <Counter counter='1'/>
        </div>
        </>
    )  
}

export default App;
