import React from 'react'
import { Switch, Router, Route } from "react-router-dom";
import LoginScreen from './login/LoginScreen'
import history from "./history";
import Root from './Root'

class App extends React.Component {

    render() {



        return (
            <Router history={history}>
                <div>
                    <Switch> 
                        <Route path='/login' exact component={LoginScreen} />
                        <Route path='/home' exact component={Root} />                        
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
