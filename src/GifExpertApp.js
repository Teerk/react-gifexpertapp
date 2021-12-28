
import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


 export const GifExpertApp =()=>{

    //const categorias = ['One Punch','Samuray X','Rick and Morty'];

    const [categorias, setCategorias] = useState(['Rick and Morty']);

    // const agregarHandle = ()=>{        
    //     setCategorias([...categorias, 'Hunter']);
    //     // setCategorias(misCategorias => [...misCategorias, 'Ejemplo2']);
    // }

    return (
        <>
            <h1>Gif Expert App</h1>          
            <AddCategory setCategorias  = {setCategorias} />
            <hr></hr>
            <ol>
            {
                categorias.map( c=> (
                    // <li key={c}>{c}</li>
                    <GifGrid 
                    key={c}
                    categoria={c}
                    />
                ))
            }
            </ol>
        </>
    );
}
