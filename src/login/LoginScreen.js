import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/loginAction'
import history from '../history'

const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '220px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px',
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%',
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const Field = React.forwardRef(({ label, type }, ref) => {
    return (
        <div>
            <label style={labelStyle} >{label}</label>
            <input ref={ref} type={type} style={inputStyle} />
        </div>
    );
});

const Form = ({ onSubmit, error }) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        
        onSubmit(usernameRef.current.value,passwordRef.current.value);
    };
    return (
        <form style={formStyle} onSubmit={handleSubmit} >
            <Field ref={usernameRef} label="Username:" type="text" />
            <Field ref={passwordRef} label="Password:" type="password" />
            <div>
                <button style={submitStyle} type="submit">Submit</button>
            </div>
            {error ?
                <div>Wrong credentials</div>
                :
                <div />
            }
        </form>
    );
};

class Login extends React.Component {

    onSubmit = (username, password) => {
        this.props.login(username, password)
    }

    render() {

        if (this.props.auth.token) {
            history.push('/home')
            return  null
        }

        return (
            <div style={appStyle}>
                <Form onSubmit={(username, password) => this.onSubmit(username, password)} error={this.props.error} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}


export default connect(mapStateToProps, { login })(Login)