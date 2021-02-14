import React, { Component } from "react";
import "./App.css";
import Counters from "./Components/counters";
import NavBar from "./Components/navBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    console.log("reset");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // we should not directly modify the state in React (No No!)
  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters]; // cloning counters array
    const index = counters.indexOf(counter); // assigning 'index of counter object in the cloned array counters' to constant index
    counter[index] = { ...counter }; // cloning counter object at index of counter
    counters[index].value += 1; //
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = { ...counter };
    counters[index].value -= 1;
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    console.log("Delete handled");
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          key={this.state.counters.id}
          counter={this.state.counters}
        ></NavBar>
        <div className="Container">
          <Counters
            key={this.state.counters.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            counter={this.state.counters}
          ></Counters>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
