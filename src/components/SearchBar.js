import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Search from '../icons/search.png'
import '../css/SearchBar.css';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    image: {
        paddingTop: '2px',
        width: '22px',
        height: '22px'
    }
}))

export default function SearchBar(props) {


    const classes = useStyles();

    return (
        <div class="wrap">
            <div class="search">
                <input type="text" className="searchTerm" placeholder="Search cities..." onChange={props.handleChange}/>
                <button type="submit" className="searchButton" onClick={props.getWeather}>
                    <img src={Search} className={classes.image}/>
                </button>
            </div>
        </div>
    )
}