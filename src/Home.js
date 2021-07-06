import React from 'react'
import { connect } from 'react-redux'
import { getPersons } from './actions/personAction'
import CreatePerson from './create/CreatePerson'

class Home extends React.Component {

    componentDidMount() {
        this.props.getPersons()
    }

    renderPersons = () => {
        return this.props.persons.persons.map(person => {
            return <div style={{ padding: 20 }}>
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
                <CreatePerson />
                {this.props.persons.persons ?
                    <div>
                        Persons:
                        {this.renderPersons()}
                    </div>
                    :
                    <div>
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