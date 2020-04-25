import React from 'react';
import {
    TextField,
    Button,
    Typography
} from '@material-ui/core';
// import Main from './Main'

const LogInControl = (props) => {
    console.log(props)
    return (
        <div>
            <Typography variant="h3" >CHW Survey</Typography>
            <br />
            <br />
            <Typography variant="h5" >Sign In</Typography>
            <br />
            <br />
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