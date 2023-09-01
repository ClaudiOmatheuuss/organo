import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => { //recebe arrow function com propriedades como parametro
   
    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return (
        //JSX
        <div className="campo-texto">
            <label>{props.label}</label> 
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/> 
        </div>
    ) //props.obrigatorio for true então o input será required
}// retorna label e placeholder do input de acordo com a string que atribuimos a essa propriedades do componente no arquivo da nossa aplicação react

export default CampoTexto