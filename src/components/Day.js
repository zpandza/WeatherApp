import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    paper: {
        height: '300px',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}))

function Day(props) {

    const classes = useStyles();


    console.log(props.data)

    let time = props.data.dt_txt.split(" ")
    let displayTime = time[1];

    return (
        <Paper className={classes.paper}>
            <p><strong>Time of day:</strong> {displayTime}</p>
            <p><strong>Temperature:</strong> {props.data.main.temp}</p>
            <p><strong>Weather: </strong>{props.data.weather[0].description}</p>
            <div>
                <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}></img>
            </div>
        </Paper>

    )
}

export default Day;