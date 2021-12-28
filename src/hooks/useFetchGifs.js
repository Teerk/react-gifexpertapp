//LOS HOOKS NO SON MAS QUE FUNCIONES

import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGifs"




export const useFetchGifs = (categoria) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    });
    
    useEffect(()=>{
        getGifs(categoria).then(imgs =>{
            setTimeout(()=>{
                console.log(imgs);
            setstate({                
                data:imgs,
                loading:false
            });
        },1000);
        });
    },[categoria]);

    // setTimeout(()=>{
    //     setstate({
    //         data:[1,2,3,4,5,6],
    //         loading:false
    //     });
    // },3000);


    return state; //{data:[],loading:true}
}
