import React, { Component } from "react";

class Counter extends Component {
 //making counter a controlled component by deleting state and handleIncrement method from here.
  render() {
    return (
  <div class="row">
    <div class="col-1">
    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    </div>
    <div class="col-sm">
    <button onClick={() => this.props.onIncrement(this.props.counter)}  className="btn btn-secondary btn-sm m-2">+</button>
        <button onClick={() => this.props.onDecrement(this.props.counter)}  
        className="btn btn-secondary btn-sm m-2"
        disabled={this.props.counter.value === 0? "disabled":""}>-</button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2 ">x</button>  
    </div>
  </div>
      



     
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
