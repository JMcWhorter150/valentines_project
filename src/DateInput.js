import React from 'react';

export default class TodayDate extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            today: "",
            date: "",
            days: ''
        }
    }

    render() {
        return (
        <div>
            <h2>Select the next day you will see Joe</h2>
            <input onChange={event => this._handleDate(event.target.value)} type="date" value={this.state.date} min='2020-02-14' max="2020-12-31" ></input>
            <p>{this.state.days ? `There are ${this.state.days} sleeps until you see Joe`: ''}</p>
        </div>
        )
    }

    _handleDate = (text) => {
        this.setState({
            date: text
        }, () => this._sleeps())
    }

    _sleeps = () => {
        const today = new Date();
        const joeDay = new Date(this.state.date);
        const newDays = Math.ceil((joeDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        this.setState({
            days: newDays + 1
    })
}
}