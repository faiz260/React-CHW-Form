import React from 'react';
import { TextField, Button } from '@material-ui/core';
// import Main from './Main'

const LogInControl = (props) => {
    console.log(props)
    return (
        <div>
            <TextField
                // id="standard-basic"
                label="Username"
                name="userName"
                value={props.userName}
                onChange={props.handleChange}
            />
            <TextField
                // id="standard-basic"
                label="Password"
                name="password"
                type="password"
                value={props.password}
                onChange={props.handleChange}
            />
            <Button
                variant="contained"
                color="secondary"
                onClick={props.handleLogin}>
                Log in
                                    </Button>
        </div >

    );

}

export default LogInControl;  