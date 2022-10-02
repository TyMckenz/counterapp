import './App.css';
import React, { Component } from 'react';
import Counters from './component/counters';
import NavBar from './component/navbar';


class App extends Component {
    state = {
        counters: [
            {id:1, value: 0},
            {id:2, value: 0},
            {id:3, value: 0}
        ]

    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...this.state.counters};
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value--;
        this.setState({ counters });

    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        } );
        this.setState({ counters });
    };

    handleRestart = () => {
        window.location.reload();
    };



render() {
   
    return (
        <div className="App">
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}></NavBar>
        <main>
            < Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onRestart={this.handleRestart}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                
                />

        </main>
    </div>
    ); 
} 
}

export default App;
