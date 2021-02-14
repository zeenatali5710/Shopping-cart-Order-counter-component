import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const { onDelete, onIncrement, onDecrement, counter , onReset} = this.props;
        return ( 
            <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2 ">Reset</button>
            {counter.map(counter => 
            <Counter 
            key={counter.id}  
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            onDecrement={onDecrement} 
            />
            )}
            </div>
         );
    }
}
 
export default Counters;