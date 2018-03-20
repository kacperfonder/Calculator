import React from 'react';
import ReactDOM from 'react-dom';
require('../../dist/css/main.css');






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

