import React from 'react'

class CreateDelays extends React.Component {

    constructor(props) {
        super(props)
        this.state = { name: '', surname: '', date: '' }
    }

    onSubmit = (e) => {
        e.preventDefault()
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

export default CreateDelays