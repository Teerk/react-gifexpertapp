import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import React,{useEffect,useState} from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid =({categoria})=>{

    const { data:images, loading} = useFetchGifs(categoria);    


    //const [images, setImages] = useState([]);

    // useEffect(()=>{
    //     getGifs();
    // },[]);


    // useEffect(()=>{
    //     //retorna una promesa por eso el then
    //     getGifs(categoria).then(setImages);
    // },[categoria]);




    return (
            <>
            <h3>{categoria}</h3>

            {/* {loading ? 'Cargando':'Fin de carga'} */}
            {loading && <p>Loading</p>}
            
            <div className="card-grid">{
                images.map(img  => (
                    <GifGridItem
                    {...img}
                    key = {img.id}            
                    />
                ))
                }
            </div>
            </>
    );
}