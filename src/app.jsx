/// THIRD-PARTY IMPORTS
import './assets/plugins/bootstrap-4.1.3/css/bootstrap.min.css'
import './assets/plugins/bootstrap-4.1.3/js/bootstrap.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

/// CUSTOM IMPORTS
import './assets/style.css'

/// CORE IMPORTS
import ReactDOM from 'react-dom'
import React from 'react'

/// CONTROLLERS
import Home from './controllers/Home.jsx'

ReactDOM.render(
    <Home></Home>,
    document.getElementById('root')
);