import React from 'react';
import axios from 'axios';
import GiphyImg from './GiphyImg';


class Giphy extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GiphyImg getSrc={this._getGiphy} />
            </div>
        );
    }

    _getGiphy = (searchTerm) => {
        let giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=9IoUcDTPeIbQWdkdVYX0CBuBZuhMfNEk&tag=${searchTerm}&rating=G`;
        axios.get(giphyUrl)
            .then(r => {
                console.log(r);
                this.setState({
                    giphy: r.data.data.images.downsized_large.url
                })
            }
            )
            .catch(err => "You got an error from the Giphy Api")
    }
}

export default Giphy;