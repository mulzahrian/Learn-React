import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render(){
        return(
            <div className='flex'>
                <h1 className='mr-5'>{this.state.count}</h1>
                <button className='bg-black text-white p-3' onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter;