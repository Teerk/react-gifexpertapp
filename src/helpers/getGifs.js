
export const getGifs = async(categoria) =>{

    const api_url = `https://api.giphy.com/v1/gifs/search?api_key=B5tZqbHTJgHu71UVCALYSkPnQJtOl0ee&q=${encodeURI(categoria)}&limit=10`
    const resp = await fetch(api_url);
    const {data} = await resp.json();

    const infoFiltrada = data.map(img =>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    });
    
    // console.log(infoFiltrada);
    return infoFiltrada;
}
