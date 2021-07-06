import React from 'react'
import { connect } from 'react-redux'
import { createPerson } from '../actions/personAction'

class CreatePerson extends React.Component {

    constructor(props) {
        super(props)
        this.state = { name: '', surname: '', date: '' }
    }

    onSubmit = (e) => {
        e.preventDefault()


        this.props.createPerson(this.state.name, this.state.surname, this.state.date)
    }

    render() {

        const labelStyle = {
            margin: 40
        }

        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <label style={labelStyle}>
                    Όνομα:
                    <input type="text" name="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                </label>
                <br />
                <br />
                <br />

                <label style={labelStyle}>
                    Επίθετο:
                    <input type="text" name="surname" value={this.state.surname} onChange={e => this.setState({ surname: e.target.value })} />
                </label>
                <br />
                <br />
                <br />


                <label style={labelStyle}>
                    Ημ. γέννησης:
                    <input type="text" name="date" value={this.state.date} onChange={e => this.setState({ date: e.target.value })} />
                </label>
                <br />


                <input style={labelStyle} type="submit" value="Αποθήκευση" />
            </form>
        )
    }
}

export default connect(null, { createPerson })(CreatePerson)