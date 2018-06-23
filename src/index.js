import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Werewolf from './werewolf/Werewolf';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Werewolf />, document.getElementById('root'));
registerServiceWorker();
