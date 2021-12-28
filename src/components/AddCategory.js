
import React,{useState} from "react"
import  PropTypes  from "prop-types";

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias(misCategorias => [inputValue,...misCategorias]);
            setInputValue('');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                value={ inputValue}
                onChange={handleInputChange}
                type="text"
            />
        </form>
    )
}


//CANDADO PARA HACER REQUERIDO EL  PROP
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

