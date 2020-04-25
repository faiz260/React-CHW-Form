import React, { Component } from 'react';
import clsx from 'clsx';
import {
    Typography,
    Button,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    makeStyles,
    Checkbox
} from '@material-ui/core';

// Control styling
const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: 'red',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
});

// Inspired by blueprintjs
function StyledRadio(props) {
    const classes = useStyles();
    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}


class Main extends Component {
    state = {
        form: [],
        isLoggedIn: true,
        userName: '',
        password: '',
        houseNumber: '',
        areaOrMOhallaName: '',
        ucName: '',
        streetNumber: '',
        buildingName: '',
        childName: '',
        numberOfChild: '',
        codeForHighRisk: '',
        ipv: false,
        bcg: false,
        peniaIII: false
    }
    addForm = () => {
        console.log("Add Function")
        console.log(this.state.form)
        this.setState({
            form: [...this.state.form, '']
        })
    }
    removeForm = (index) => {
        console.log("Remove Function")
        var formArray = [...this.state.form]
        var i = formArray.indexOf(index.target.value)
        if (formArray !== -1) {
            formArray.splice(i, 1)
            this.setState({
                form: formArray
            })
        }
    }
    submit = () => {
        console.log(this.state)
    }
    handler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handlerCheckbox = (e) => {
        this.setState({ [e.target.name]: e.target.checked })
    }
    render() {
        return (
            <div>
                <Typography variant="h3" >CHW Survey</Typography>
                <br />
                {/* Login Button */}
                <br />
                <Button variant="contained"
                    color="primary"
                    onClick={(e) => { this.addForm(e) }}>
                    Add Form
                    </Button>
                {
                    this.state.form.map((val, index) => {
                        return (
                            <form key={index} onSubmit={() => this.submit()}>
                                <br />
                                <br />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.removeForm}>
                                    Delete Form
                                    </Button>
                                <br />
                                <br />
                                {/* Location Information */}
                                <Typography variant="h5">Location Information </Typography>
                                <br />
                                <TextField
                                    type="number"
                                    id="standard-basic"
                                    label="House Number"
                                    name="houseNumber"
                                    value={this.state.houseNumber}
                                    onChange={this.handler}
                                />
                                <TextField id="standard-basic" label="Area or Mohalla Name" />
                                <TextField id="standard-basic" label="UC Name" />
                                <br />
                                <TextField id="standard-basic" label="Street Number" type="number" />
                                <TextField id="standard-basic" label="Building Name" />
                                <br />
                                <br />
                                {/* Basic Information */}
                                <Typography variant="h5">Basic Information</Typography>
                                <br />
                                <br />
                                <FormLabel component="legend">Code For High Risk Group</FormLabel>
                                <RadioGroup
                                    className="radioGroups"
                                    aria-label="code1"
                                    name="codeForHighRisk"
                                    value={this.state.codeForHighRisk}
                                    onChange={this.handler}>
                                    <FormControlLabel className="radioButtons" value="1" control={<StyledRadio />} label="1" />
                                    <FormControlLabel className="radioButtons" value="2" control={<StyledRadio />} label="2" />
                                    <FormControlLabel className="radioButtons" value="3" control={<StyledRadio />} label="3" />
                                    <FormControlLabel className="radioButtons" value="4" control={<StyledRadio />} label="4" />
                                    <FormControlLabel className="radioButtons" value="5" control={<StyledRadio />} label="5" />
                                </RadioGroup>
                                <TextField id="standard-basic" label="Cast" />
                                <TextField id="standard-basic" label="Guardian" />
                                <TextField id="standard-basic" label="Language" />
                                <TextField id="standard-basic" label="Socioeconomic Group" />
                                <br />
                                <br />
                                {/* Children Information */}
                                <Typography variant="h5">Children Information</Typography>
                                <TextField id="standard-basic" label="Child Name" />
                                <TextField id="standard-basic" label="Number Of Child" type="number" />
                                <br />
                                <br />
                                <FormLabel>Birthday</FormLabel>
                                <TextField
                                    id="standard-basic"
                                    label=""
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }} />
                                <br />
                                <br />
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup className="radioGroups" defaultValue="female" aria-label="gender" name="customized-radios">
                                    <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
                                    <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
                                    <FormControlLabel value="other" control={<StyledRadio />} label="Other" />
                                </RadioGroup>
                                <br />
                                <br />
                                <Typography variant="h5">Status Of Routine Vacation Of 0-23 Month Of Child</Typography>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={this.state.ipv}
                                        onChange={this.handlerCheckbox}
                                        name="ipv" />}
                                    label="IPV"
                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={this.state.bcg}
                                        onChange={this.handlerCheckbox}
                                        name="bcg" />}
                                    label="BCG"
                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={this.state.peniaIII}
                                        onChange={this.handlerCheckbox}
                                        name="peniaIII" />}
                                    label="Penia III"
                                />
                                <br />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => { this.submit() }}
                                >
                                    Submit
                                </Button>
                                <br />
                                <br />
                            </form>
                        )
                    })
                }
                <br />
                <br />
                <Button variant="contained"
                    color="primary"
                    onClick={this.props.handleLogOut}>
                    Log Out
                    </Button>
            </div >
        );
    }
}


export default Main;
