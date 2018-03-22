import React from 'react';
import ReactDOM from 'react-dom';
require('../../dist/css/main.css');

class Calc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 0,
            operation: '',
            numberOne: null,
            numberTwo: null,
            result: 0
        }
    }
    handleClearClick = (e) => {
        this.setState({
            display: '0',
            numberOne: 0,
            numberTwo: 0
        })
    }
  
    handleOprClick = (e) => {
        if (!this.state.number1) {
            this.setState({
                numberOne: parseInt(this.state.display),
                operation: e.target.value,
                display: ''
            })
        }
    }

    handleNrClick = (e) => {
        if(this.state.display.length <=15) {
            this.setState({
                display: this.state.display.concat(e.target.value)
            })
        }
    }

    performResult = (e) => {
        this.state.numberTwo = parseInt(this.state.display)
        let result = 0;
          if(this.state.operation === 'div') result = this.state.numberOne / this.state.numberTwo;
          if(this.state.operation === 'multi') result = this.state.numberOne * this.state.numberTwo;
          if(this.state.operation === 'add') result = this.state.numberOne + this.state.numberTwo;
          if(this.state.operation === 'sub') result = this.state.numberOne - this.state.numberTwo;
          this.setState({
              display: result
          })
    }

    render(){
        return (
            <section className='wrap'>
                <section className='calcBody'>
                    <div className='displayedNumbers'>
                        {this.state.display}
                    </div>
                    <div className='buttons'>
                        <div className='operationBtns'>
                            <button onClick={this.handleClearClick}>CE</button>
                            <button onClick={this.handleOprClick} value={'div'}>&divide;</button>
                            <button onClick={this.handleOprClick} value={'multi'}>*</button>
                            <button onClick={this.handleOprClick} value={'add'}>+</button>
                            <button onClick={this.handleOprClick} value={'sub'}>-</button>
                        </div>
                        <div className='numberBtns'>
                            <button onClick={this.handleNrClick} value={'7'}>7</button>
                            <button onClick={this.handleNrClick} value={'8'}>8</button>
                            <button onClick={this.handleNrClick} value={'9'}>9</button>
                            <button onClick={this.handleNrClick} value={'4'}>4</button>
                            <button onClick={this.handleNrClick} value={'5'}>5</button>
                            <button onClick={this.handleNrClick} value={'6'}>6</button>
                            <button onClick={this.handleNrClick} value={'1'}>1</button>
                            <button onClick={this.handleNrClick} value={'2'}>2</button>
                            <button onClick={this.handleNrClick} value={'3'}>3</button>
                            <button onClick={this.handleNrClick} value={'0'}>0</button>
                            <button onClick={this.handleNrClick} value={"."}>.</button>
                            <button onClick={this.performResult} >=</button>
                        </div>
                    </div>
                </section>
            </section>
	    )
    }
}

class App extends React.Component {
    render(){
        return (
        <div>
            <Calc/>
        </div>
        )
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
})

