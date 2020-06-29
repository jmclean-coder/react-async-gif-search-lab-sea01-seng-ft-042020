import React from 'react';

function GifList(props){


 const buildGifList = () => {return props.gifs.map(gif => <li key={gif.id}><img alt={gif.title} src={gif.images.original.url} /></li>)}

    return(<ul>{buildGifList()}</ul>)
}
export default GifList