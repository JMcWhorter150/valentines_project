import React from 'react';

function GiphyImg({source}) {
    return(
        <div className="pictureFrame">
            <img src={source} />
        </div>
    );
}

export default GiphyImg;