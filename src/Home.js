import React from 'react'
import { connect } from 'react-redux'
import { getPersons } from './actions/personAction'
import CreateDelay from './createDelay/CreateDelay'

class Home extends React.Component {


    componentDidMount() {
        this.props.getPersons()
    }

    renderPersons = () => {
        return this.props.persons.persons.map(person => {
            return <div>
                <h2>
                    {person.name}
                </h2>
                <h2>
                    {person.lastname}
                </h2> <h2>
                    {person.birth_date}
                </h2>
            </div>
        })
    }

    render() {

        return (
            <div>
                <CreateDelay />
                {this.props.persons.persons ? this.renderPersons() : <div>
                    Loading...
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { persons: state.persons }
}

export default connect(mapStateToProps, { getPersons })(Home)