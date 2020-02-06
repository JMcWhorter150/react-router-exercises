import React from 'react';
import { useParams } from 'react-router-dom';

function GiphyImg({getSrc}) {
    let searchTerm = useParams.category
    return <img src={getSrc(searchTerm)} />
}

export default GiphyImg;