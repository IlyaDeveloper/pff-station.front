import React from 'react'
import ReactDOM from 'react-dom'
import {Router, BrowserRouter} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import "animate.css/animate.min.css";
import './scss/style.scss'
import App from './app/app'

const history = createBrowserHistory()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>


        {/*<Router history={history}>*/}


        {/*</Router>*/}
    </React.StrictMode>,

    document.getElementById('root')
)
