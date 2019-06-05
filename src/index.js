import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import '@/styles/init.scss'
import '@/styles/app.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
ReactDOM.render(<App />, document.getElementById('ultron'))
serviceWorker.unregister();
