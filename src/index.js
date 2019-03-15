import React from 'react';
import ReactDOM from 'react-dom';
import App, {color, number} from './components/App';
import './index.css'

console.log(color, number)

ReactDOM.render(<App />, document.getElementById('root'));