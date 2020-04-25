import React, { Component } from 'react';
import {
    TextField,
    Button,
    Typography
} from '@material-ui/core';

const FirstPage = (props) => {

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={props.handleAdmin}
            >
                Log in As Admin
                                    </Button>
            <br />
            <br />
            <br />
            <Button
                variant="contained"
                color="primary"
            >
                Log in As User
                                    </Button>
        </div>
    );

}

export default FirstPage;