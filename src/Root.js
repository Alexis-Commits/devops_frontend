import React from "react"
import { Route, Router, Switch } from "react-router-dom"
import history from "./history"
import Home from "./Home"
import { connect } from 'react-redux'
import CreateDelay from "./createDelay/CreateDelay"


/**
 * Root component holds the logged-in App navigation and structure
 * */
class Root extends React.Component {

    render() {

        if (!this.props.auth.token) {
            history.push('/login')
            return null
        }

        return (
            <div>
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route path='/home' exact component={Home} />
                            <Route path='/create' exact component={CreateDelay} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}


export default connect(mapStateToProps)(Root)