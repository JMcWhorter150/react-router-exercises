import React from 'react';
import axios from 'axios';


class Giphy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            src: ""
        }
    }

    componentDidMount() {
        console.log(this.props);
        let category = this.props.location.pathname.split('/')[2];
        this._getGiphy(category)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            console.log('prop location changed')
            let category = this.props.location.pathname.split('/')[2];
            this._getGiphy(category)
        }
    }

    render() {
        // console.log(this.props.location.pathname.split('/')[2])
        console.log(this.props)
        return (
            <div>
                <img src={this.state.src} />
            </div>
        );
    }

    _getGiphy = (category) => {
        // console.log(category);
        let giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=9IoUcDTPeIbQWdkdVYX0CBuBZuhMfNEk&tag=${category}&rating=G`;
        axios.get(giphyUrl)
            .then(r => {
                // console.log(r);
                this.setState({
                    src: r.data.data.images.downsized_large.url
                })
            }
            )
            .catch(err => "You got an error from the Giphy Api")
    }
    

}

export default Giphy;