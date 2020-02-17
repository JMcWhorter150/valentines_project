import React from 'react';
import axios from 'axios';
import GiphyImg from './GiphyImg';

const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=9IoUcDTPeIbQWdkdVYX0CBuBZuhMfNEk&tag=valentines&rating=R`;

class GiphyApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            giphy: ""
        };
    }
    /*
    Need a button, when you click the button, it runs a helper function
    - To begin with console.log inside your helper function

    Some state
    - Make an array of strings
    
    update your helper function
    - when you click, it should add the string "hello" to the array

    Confirm that it is working correctly
    - Open the component inspector
    - Make sure that the state array should get another hello string added to it every time you click the button
    */
    render() {
        return(
            <div>
                <button onClick={this._getGiphy}>Happy Valentine's Day!</button>
                <br />
                <GiphyImg source={this.state.giphy} />
            </div>
        );
    }

    _getGiphy = () => {
        axios.get(giphyUrl)
        .then(r => {
            this.setState({
                giphy: r.data.data.images.downsized_large.url
            })})
        .catch(err => {
            console.log('Yeah, no giphy for you');
        })
    }
}

export default GiphyApp;