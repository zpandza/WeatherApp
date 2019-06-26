import React from 'react';
import DaysList from './DaysList';
import SearchBar from './SearchBar';
import Button from '@material-ui/core/Button';

export default class WeatherApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            searchValue: "",
            date: new Date(),
            filteredList: []
        }

        this.getWeather();
    }

    getWeather = async () => {
        let api_call;
        
        this.state.searchValue == "" ?
        api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=4d7b856c7b8aae58a4df22cc94d80cc4&units=metric`)
        :
        api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.searchValue}&appid=4d7b856c7b8aae58a4df22cc94d80cc4&units=metric`)
        const response = await api_call.json();
        console.log(response);

        this.setState({ data: response }, this.findTemperatures)
    }

    findTemperatures = () => {
        console.log("FIND TEMP TRIGGERED")
        let stringDate = this.state.date.toISOString();
        let arr = stringDate.split("T");
        let realDate = arr[0];

        const modifiedFilteredList = this.state.data.list.filter((day) => day.dt_txt.includes(realDate))

        console.log(modifiedFilteredList);


        this.setState({
            filteredList: modifiedFilteredList
        })

    }

    changeDateToTomorrow = () => {
        console.log("CHANGEDATE TRIGGERED")
        let tomorrow = new Date(this.state.date);
        tomorrow.setDate(this.state.date.getDate() + 1);
        console.log(tomorrow.toLocaleDateString());

        this.setState({
            date: tomorrow
        },this.findTemperatures)
    }

    changeDateToYesterday = () => {
        let yesterday = new Date(this.state.date);
        yesterday.setDate(this.state.date.getDate() -1);

        this.setState({
            date: yesterday
        }, this.findTemperatures)
    }

    handleChange = (e) => {
        console.log(e.target.value)

        this.setState({
            searchValue: e.target.value
        })
    }

    render() {

        if (this.state.data == "") {
            return <div>loading...</div>
        }
        return (
            <div>
                <div className="search-bar">
                    <div>
                        <SearchBar handleChange={this.handleChange} getWeather={this.getWeather}/>
                    </div>
                </div>
                <DaysList 
                    data={this.state.data} 
                    date={this.state.date}
                    findTemperatures={this.findTemperatures}
                    changeDateToTomorrow={this.changeDateToTomorrow}
                    changeDateToYesterday={this.changeDateToYesterday}
                    filteredList={this.state.filteredList}
                />
            </div>
        )

    }
}