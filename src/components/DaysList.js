import React, { useState, useEffect } from 'react';
import Day from './Day';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import LeftArrow from '../icons/lefticon.png'
import RightArrow from '../icons/righticon.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    center: {
        margin: 0,
    },
    outer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    hover: {
        '&:hover': {
            width: '110%',
            cursor: 'pointer'
        }
    }
}));

function DaysList(props) {

    const classes = useStyles();

    let days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]


    let date = new Date(props.date);
    console.log(date.getDay());
    
    console.log(days[date.getDay()]);

    return (

        <div className={classes.root}>
            <h1 style={{ textAlign: "center" }}>{props.data.city.name}</h1>
            <br/>
            <h2 style={{textAlign: "center"}}> {days[date.getDay()]} - {date.toLocaleDateString()}</h2>
            <Grid container spacing={2}>

                <Grid item xs={4} sm={2} className={classes.outer}>
                    <div className={classes.center}>
                        <img src={LeftArrow} onClick={props.changeDateToYesterday} className={classes.hover} />
                        {/* <Button variant="contained" onClick={props.changeDateToYesterday}>Previous day</Button> */}
                    </div>
                </Grid>
                {
                    props.filteredList.map((day) => {
                        if (props.filteredList.length < 5) {
                            return (
                                <Grid item xs={5} sm={2}>
                                    <Day data={day} />
                                </Grid>
                            )
                        }
                        return (
                            <Grid item xs={2} sm={1}>
                                <Day data={day} />
                            </Grid>
                        )
                    })
                }
                <Grid item xs={4} sm={2} className={classes.outer}>
                    <div className={classes.center}>
                        <img src={RightArrow} onClick={props.changeDateToTomorrow} className={classes.hover} />
                        {/* <Button variant="contained" onClick={props.changeDateToTomorrow}>Next day</Button> */}
                    </div>
                </Grid>

            </Grid>

            {/* <Button variant="contained" onClick={props.findTemperatures}>Show</Button> */}

        </div>
    )
}

export default DaysList;