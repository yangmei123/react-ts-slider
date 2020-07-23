import React from 'react'
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'

import App from '../App';


const SliderComponent = () => (
  <App>
    <Route exact path='/' component={App} />
  </App>
)
ReactDOM.render((
  <HashRouter>
    <SliderComponent />
  </HashRouter>
), document.getElementById('root'));