import React from 'react';
import ReactDOM from 'react-dom';
require('../../dist/css/main.css');

class Calc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: '',
            operation: '',
            numberOne: null,
            numberTwo: null,
            result: '',
            oprValue: ''
        }
    }
    handleClearClick = () => {
        this.setState({
            display: '',
            operation: '',
            result: '',
            numberOne: '',
            numberTwo: '',
        })
    }

    handleOprClick = (e) => {
        if (!this.state.number1) {
            this.setState({
                numberOne: parseFloat(this.state.display),
                operation: e.target.value,
                display: ''
            })
        }
    }
  

    handleNrClick = (e) => {
        if(this.state.display.length <=5) {
            this.setState({
                display: this.state.display.concat(e.target.value),
                numberTwo: ''
            })
        }
    }
    performResult = () => {
		let result;
		this.state.numberTwo = parseFloat(this.state.display);

		switch(this.state.operation) {
			case '+':
				result = this.state.numberOne + this.state.numberTwo;
			break;

			case '/':
				result = this.state.numberOne / this.state.numberTwo;
			break;

			case '*':
				result = this.state.numberOne * this.state.numberTwo;
			break;

			case '-':
				result = this.state.numberOne - this.state.numberTwo;
            break;
		}
		this.setState({
            display: result,
            numberTwo: '',
            numberOne: '',
            operation: ''
		})
	}

    negateValue = () => {
        this.setState({
            display: this.state.display[0] === '-'  ? this.state.display.substr(1) : '-' + this.state.display
        })
    }
    percenteValue = () => {
        this.setState({
            display: this.state.display / 100 
        })
    }
   
    render(){
        return (
            <section className='calcBody'>
            
                <div className='displayedNumbers'>
                <span>
                    {this.state.numberOne} {this.state.operation} {this.state.numberTwo} 
                </span> 
                {this.state.display}
                </div>
                <div className='buttons'>
                
                    <button onClick={this.handleClearClick} className='topBtns'>C</button>
                    <button onClick={this.negateValue}      className='topBtns'>+/-</button>
                    <button onClick={this.percenteValue}    className='topBtns'>%</button>
                    <button onClick={this.handleOprClick} value={'/'} className='oprBtns'>&divide;</button>

                    <button onClick={this.handleNrClick}  value={'7'} className='nrBtns'>7</button>
                    <button onClick={this.handleNrClick}  value={'8'} className='nrBtns'>8</button>
                    <button onClick={this.handleNrClick}  value={'9'} className='nrBtns'>9</button>
                    <button onClick={this.handleOprClick} value={'*'} className='oprBtns'>*</button>

                    <button onClick={this.handleNrClick}  value={'4'} className='nrBtns'>4</button>
                    <button onClick={this.handleNrClick}  value={'5'} className='nrBtns'>5</button>
                    <button onClick={this.handleNrClick}  value={'6'} className='nrBtns'>6</button>
                    <button onClick={this.handleOprClick} value={'-'} className='oprBtns'>-</button>

                    <button onClick={this.handleNrClick}  value={'1'} className='nrBtns'>1</button>
                    <button onClick={this.handleNrClick}  value={'2'} className='nrBtns'>2</button>
                    <button onClick={this.handleNrClick}  value={'3'} className='nrBtns'>3</button>
                    <button onClick={this.handleOprClick} value={'+'} className='oprBtns'>+</button>

                    <button onClick={this.handleNrClick} value={'0'} className='nrBtns' id='zeroBtn'>0</button>
                    <button onClick={this.handleNrClick} value={"."} className='nrBtns' id='dot'>.</button>
                    <button onClick={this.performResult} className='equalBtn'>=</button>
                </div>   
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

